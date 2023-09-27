# Executables
DOCKER_COMPOSE?=docker compose
DOCKER_EXEC?=$(DOCKER_COMPOSE) exec -it
PNPM?=$(DOCKER_EXEC) test pnpm
PNPM_DOCS?=$(DOCKER_EXEC) docs pnpm

# Misc
default: help

##
## —— Setup ————————————————————————————————————————————————————————————————————

.PHONY: build
build: ## Build and start containers.
	@$(DOCKER_COMPOSE) up --build --no-recreate -d

.PHONY: rebuild
rebuild: ## Force rebuild and start all containers.
	@$(DOCKER_COMPOSE) up --build --force-recreate --remove-orphans -d

.PHONY: up
up: ## Start containers without building.
	@$(DOCKER_COMPOSE) up -d

.PHONY: stop
stop: ## Stop containers.
	@$(DOCKER_COMPOSE) stop

.PHONY: down
down: ## Stop and remove containers.
	@$(DOCKER_COMPOSE) down --remove-orphans

.PHONY: first
first: ## Setup project for first time on a local environment.
	@echo "[Copying local docs env...]"
	@cp --no-clobber website/.env.example website/.env
	@echo "[Building containers...]"
	@$(MAKE) --no-print-directory build

##
## —— Executables ——————————————————————————————————————————————————————————————

.PHONY: pnpm
pnpm: ## Run a PNPM command (e.g. make pnpm c="update").
	@$(PNPM) $(c)

.PHONY: pnpm-docs
pnpm-docs: ## Run a PNPM command over docs directory (e.g. make pnpm-docs c="update").
	@$(PNPM_DOCS) $(c)

##
## —— Lint and tests ———————————————————————————————————————————————————————————

.PHONY: lint
lint: ## Lint.
	@$(PNPM) lint

.PHONY: test-watch
test-watch: ## Run tests (watching).
	@$(PNPM) test:watch

.PHONY: test-typecheck
test-typecheck: ## Run typecheck tests.
	@$(PNPM) test:typecheck

.PHONY: test-coverage
test-coverage: ## Run tests.
	@$(PNPM) test:coverage

.PHONY: test
test: lint test-typecheck test-coverage ## Lint and run tests.

##
## —— Utilities ————————————————————————————————————————————————————————————————

.PHONY: sh
sh: ## Run sh on test container.
	@$(DOCKER_EXEC) test sh

.PHONY: help
help: ## Show help for each of the Makefile recipes.
	@grep -E '(^[a-zA-Z0-9\./_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'
