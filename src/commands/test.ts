import { BaseCommand } from "@codaxio/cdx"

export class TestCommand extends BaseCommand {
  register() {
    this.program
      .command("test")
      .description("Run tests")
      .option("-w, --watch", "Watch for changes")
      .action(async (data, command, c, d) => {
        console.log("Running tests...", data)
      })
  }
}