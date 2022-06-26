import "module-alias/register";
import moduleAlias from "module-alias";
import * as path from "path";

const files = path.resolve(__dirname, "../..");

moduleAlias.addAliases({
  "@adapter": path.join(files, "src/adapter"),
  "@controller": path.join(files, "src/controller"),
  "@domain": path.join(files, "src/domain"),
  "@infra": path.join(files, "src/infra"),
  "@shared": path.join(files, "src/domain/shared"),
  "@usecases": path.join(files, "src/usecases"),
});
