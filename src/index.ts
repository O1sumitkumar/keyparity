#!/usr/bin/env bun
import { Command } from "commander";
import pkg from "../package.json" with { type: "json" };

export const program = new Command()
  .name("keyparity")
  .description(pkg.description)
  .version(pkg.version);

if (import.meta.main) program.parse();
