import java.io.IOException;
import java.io.PrintStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.AtomicMoveNotSupportedException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;

/** Java 21, standard library only. A single-user learning task CLI. */
public final class StudyTasks {
    enum Status { TODO, DONE }

    record Task(int id, String title, Status status) {
        Task {
            if (id <= 0) throw new IllegalArgumentException("ID 必须为正整数");
            title = normalizeTitle(title);
            Objects.requireNonNull(status, "status");
        }
        Task complete() { return new Task(id, title, Status.DONE); }
    }

    public static void main(String[] args) {
        System.exit(run(args, System.out));
    }

    static int run(String[] args, PrintStream output) {
        if (args.length < 2) {
            usage(output);
            return 2;
        }
        try {
            Path file = Path.of(args[0]);
            String command = args[1];
            if (!(command.equals("list") && args.length == 2)
                    && !((command.equals("add") || command.equals("done")) && args.length == 3)) {
                usage(output);
                return 2;
            }
            List<Task> tasks = load(file);
            switch (command) {
                case "list" -> {
                    if (tasks.isEmpty()) output.println("暂无任务，先用 add 添加一项。");
                    tasks.forEach(task -> output.printf("#%d [%s] %s%n", task.id(), task.status(), task.title()));
                }
                case "add" -> {
                    int maxId = tasks.stream().mapToInt(Task::id).max().orElse(0);
                    int nextId = Math.addExact(maxId, 1);
                    Task task = new Task(nextId, args[2], Status.TODO);
                    tasks.add(task);
                    save(file, tasks);
                    output.printf("已添加 #%d：%s%n", task.id(), task.title());
                }
                case "done" -> {
                    int id = Integer.parseInt(args[2]);
                    int index = -1;
                    for (int i = 0; i < tasks.size(); i++) {
                        if (tasks.get(i).id() == id) { index = i; break; }
                    }
                    if (index < 0) throw new IllegalArgumentException("找不到任务 #" + id);
                    tasks.set(index, tasks.get(index).complete());
                    save(file, tasks);
                    output.println("已完成 #" + id);
                }
                default -> throw new IllegalStateException("已校验的命令不应到达此处");
            }
            return 0;
        } catch (IllegalArgumentException | ArithmeticException e) {
            output.println("错误：" + e.getMessage());
            return 2;
        } catch (IOException e) {
            output.println("错误：无法读写任务文件。" + e.getMessage());
            return 1;
        }
    }

    private static String normalizeTitle(String title) {
        if (title == null || title.isBlank()) throw new IllegalArgumentException("标题不能为空");
        if (title.indexOf('\t') >= 0 || title.indexOf('\n') >= 0 || title.indexOf('\r') >= 0) {
            throw new IllegalArgumentException("标题不能包含制表符或换行");
        }
        return title.strip();
    }

    private static List<Task> load(Path file) throws IOException {
        List<Task> tasks = new ArrayList<>();
        if (!Files.exists(file)) return tasks;
        List<String> lines = Files.readAllLines(file, StandardCharsets.UTF_8);
        var ids = new HashSet<Integer>();
        for (int i = 0; i < lines.size(); i++) {
            String[] parts = lines.get(i).split("\t", -1);
            try {
                if (parts.length != 3) throw new IllegalArgumentException("需要 ID、状态、标题三列");
                Task task = new Task(Integer.parseInt(parts[0]), parts[2], Status.valueOf(parts[1]));
                if (!ids.add(task.id())) throw new IllegalArgumentException("ID 重复");
                tasks.add(task);
            } catch (IllegalArgumentException e) {
                throw new IOException("文件第 " + (i + 1) + " 行格式错误：" + e.getMessage(), e);
            }
        }
        return tasks;
    }

    private static void save(Path file, List<Task> tasks) throws IOException {
        Path destination = file.toAbsolutePath();
        Files.createDirectories(destination.getParent());
        Path temp = Files.createTempFile(destination.getParent(), ".study-tasks-", ".tmp");
        try {
            List<String> lines = tasks.stream()
                    .map(task -> task.id() + "\t" + task.status() + "\t" + task.title())
                    .toList();
            Files.write(temp, lines, StandardCharsets.UTF_8);
            try {
                Files.move(temp, destination, StandardCopyOption.REPLACE_EXISTING, StandardCopyOption.ATOMIC_MOVE);
            } catch (AtomicMoveNotSupportedException e) {
                Files.move(temp, destination, StandardCopyOption.REPLACE_EXISTING);
            }
        } finally {
            Files.deleteIfExists(temp);
        }
    }

    private static void usage(PrintStream output) {
        output.println("用法：java StudyTasks <数据文件> list|add <标题>|done <ID>");
        output.println("示例：java StudyTasks tasks.tsv add \"学习泛型\"");
    }
}
