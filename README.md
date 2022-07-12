# Hello Rails-React

![Ruby](https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white)
![Rails](https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

> Connection app between a Ruby on Rails back-end and React front-end.

![screenshot](./app/assets/images/app_screenshot.png)

## Built with

- `Ruby 3.1.2`
- `Rails 6.1.6`
- `React 18.2.0`
- `Postgres 14.3.1`

## Getting Started

To get started with the app, clone the repo, install ruby if needed, and then install the required gems, as described below.

## Getting Started

### Prerequisites

- `Ruby 2.5.0` or higher
- `Rails 6` (`rails 7` not supported)
- `React 16` or higher
- `Postgres 13` or higher

### Setup

```sh
git clone git@github.com:fabgrel10/hello-rails-react.git
cd hello-rails-react
```

### Install

```sh
bundler install
```

### Usage

```sh
./bin/rails db:create
./bin/rails db:migrate
./bin/rails db:seed
./bin/rails server
```

Open your browser and go to http://localhost:3000/

### Run tests

```sh
bundle exec rspec spec
```

## Author

👤 **Fabrizio**

| &nbsp;       | &nbsp;                                               |
| ------------ | ---------------------------------------------------- |
| **GitHub**   | [@fabgrel10](https://github.com/fabgrel10)           |
| **Twitter**  | [@fabgrel10](https://twitter.com/fabgrel10)          |
| **LinkedIn** | [@fabgrel10](https://www.linkedin.com/in/fabgrel10/) |

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Microverse

## 📝 License

This project is [MIT](https://mit-license.org/) licensed. See [LICENSE.md](LICENSE.md) for details.
