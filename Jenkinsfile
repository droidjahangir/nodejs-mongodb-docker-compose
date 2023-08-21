def gv

CODE_CHANGES = getGitChange
// localhost:8080/env-vars.html
pipeline {
    agent {
        docker {
            image 'node:18.17.1-alpine3.18'
            args '-p 3000:3000'
        }
    }
    environment {
        NEW_VERSION = '1.3.0'
        SERVER_CREDENTIALS = credentials('server-credentials')
    }
    tools {
        nodejs 'Nodejs'
    }
    parameters {
        string(name: 'VERSION', defaultValue: '', description: 'version to deploy on pod')
        choice(name: 'VERSION', choices: ['1.1.0', 1.2.0], description: 'test description')
        booleanParam(name: 'executeTests', defaultValue: true, description: 'boolelan description')
    }
    stages {
        stage("init") {
            steps {
                gv = load "script.groovy"
            }
        }

        stage("build") {
            when {
                expression {
                    BRANCH_NAME == 'dev' && CODE_CHANGES == true
                }
            }
            steps {
                script {
                    gv.buildApp()
                }
            }
        }
        
        stage("test") {
            when {
                expression {
                    BRANCH_NAME == 'dev' || BRANCH_NAME == 'master'
                }
            }
            steps {
                script {
                    gv.testApp()
                }
            }
        }

        stage("deploy") {
            input {
                message: "Select the environment to deploy to : "
                ok: "Done"
                parameters {
                    choice(name: 'ENV', choices: ['dev', 'staging', 'prod'], description: '')
                }
            }
            steps {
                script {
                    gv.deployApp()
                    echo "Deploying to ${ENV}"
                }
            }
        }
    }

    post {
        always {
            echo 'always running this stage...'
        }

        success {
            echo 'after success those stages...'
        }

        failure {
            echo 'after failure those stages...'
        }
    }
}