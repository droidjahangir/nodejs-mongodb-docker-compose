def buildApp() {
    echo 'building the application...'
    sh 'npm install'
}

def testApp() {
    echo 'testing the application...'
    // sh './jenkins/scripts/test.sh'
}

def deployApp() {
    echo 'deploying the application...'
    // withCredentials([
    //     usernamePassword(credentials: 'server-credentials', usernameVariable: USER, passwordVariable: PWD)
    // ]) {
    //     sh "some script ${USER} ${PWD}"
    // }
}