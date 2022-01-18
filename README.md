# Meal-Planner-Frontend
This application is designed to be a playground for Angular Development.

## Run locally
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
The application expects a Backend to be reachable.
You can do this by having the `meal-planner` running in a docker-container with port forwarding or by port-forwarding the kubernetes service.
The command for that is `kubectl port-forward service/meal-planner-be -n dev 8080:8080`.

## Release
Run `distributeDockerImage-sh`. This will build the project and docker-image for arm322v7 and push it to the `08021986` repository.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
