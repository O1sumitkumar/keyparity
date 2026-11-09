# keyparity

Your code reads `STRIPE_KEY`. Your `.env.example` forgot it, and so did the repo's GitHub Secrets. You find out when the deploy fails at 2 a.m.

keyparity checks that every environment variable your code uses is listed in `.env.example` and set as a GitHub Secret, and flags the ones nobody uses any more. It reads secret **names** only, never values.

## Status

**In development. Nothing is released yet.** The first release, v0.1.0, will check JavaScript and TypeScript, Python, Go, Rust and GitHub Actions workflows. The plan is in the [v0.1.0 milestone](https://github.com/keyparity/keyparity/milestones).

## Contributing

Issues and ideas are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md). To work on it locally, you need [Bun](https://bun.sh):

```sh
bun install
bun test
```

## License

[MIT](LICENSE)
