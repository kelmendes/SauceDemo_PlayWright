pipeline {
    agent any

    tools {nodejs "NodeJS"}

    stages {
        stage('Node Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Playwright Install') {
            steps {
                sh 'npx playwright install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'output/monocart/', fingerprint: true
            junit skipPublishingChecks: true, testResults: 'output/junit/*.xml'
        }
    }
}