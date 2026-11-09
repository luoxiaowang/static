import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;

/** No libraries needed. This executable test throws AssertionError on failure. */
public final class StudyTasksTest {
    private static int checks;

    public static void main(String[] args) throws Exception {
        Path directory = Files.createTempDirectory("study-tasks-test-");
        Path file = directory.resolve("tasks.tsv");
        try {
            expect(run(file, "list").contains("暂无任务"), "empty list");
            expect(run(file, "add", "学习泛型").contains("已添加 #1"), "add task");
            expect(run(file, "add", "  练习 Stream  ").contains("已添加 #2"), "trim title");
            expect(run(file, "list").contains("练习 Stream"), "persist between runs");
            expect(run(file, "done", "1").contains("已完成 #1"), "finish task");
            expect(run(file, "list").contains("DONE"), "persist completion");
            expect(run(file, "done", "1").contains("已完成 #1"), "idempotent completion");
            expect(run(file, "done", "99").contains("错误"), "missing id");
            expect(run(file, "done", "bad").contains("错误"), "invalid number");
            expect(run(file, "add", " ").contains("错误"), "blank title");
            expect(run(file, "add", "a\tb").contains("错误"), "tab title");
            expect(run(file, "wat").contains("用法"), "unknown command");
            expect(StudyTasks.run(new String[0], System.out) == 2, "missing args exit code");
            Files.writeString(file, "not a task", StandardCharsets.UTF_8);
            expect(run(file, "list").contains("文件第 1 行"), "corrupt data reported");
            Files.writeString(file, "1\tTODO\tA\n1\tDONE\tB\n", StandardCharsets.UTF_8);
            expect(run(file, "list").contains("ID 重复"), "duplicate ids rejected");
            System.out.println("PASS: " + checks + " checks");
        } finally {
            Files.deleteIfExists(file);
            Files.deleteIfExists(directory);
        }
    }

    private static String run(Path file, String... command) {
        String[] args = new String[command.length + 1];
        args[0] = file.toString();
        System.arraycopy(command, 0, args, 1, command.length);
        var bytes = new ByteArrayOutputStream();
        try (var output = new PrintStream(bytes, true, StandardCharsets.UTF_8)) {
            int status = StudyTasks.run(args, output);
            String result = bytes.toString(StandardCharsets.UTF_8);
            if (result.contains("错误") || result.contains("用法")) {
                expect(status != 0, "error exit code");
            } else {
                expect(status == 0, "success exit code");
            }
            return result;
        }
    }

    private static void expect(boolean condition, String description) {
        checks++;
        if (!condition) throw new AssertionError(description);
    }
}
