pipeline {
    agent any

    environment {
        APP_NAME = 'your-app-name'
        BUILD_DIR = 'target'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                bat 'echo Build step — replace with your command'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'echo Test step — replace with your command'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Simulating deployment...'
                bat 'echo Application deployed to local server!'
            }
        }

        stage('Archive') {
            steps {
                echo 'Archiving build artifacts...'
                // Using allowEmptyArchive: true so it doesn't fail if the folder is empty
                archiveArtifacts artifacts: 'target/*.jar', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution finished.'
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline FAILED — check the logs above.'
        }
    }
}
