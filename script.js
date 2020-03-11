function loadScript(src,callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script)
    script.onerror = () => callback(new Error(`Error script: /n ${script} /n loading.`))
    document.head.append(script);
}

loadScript('./loadedScript.js', (error, script) => {
    if (error) {

    }
    newFunction(script.src)
    loadScript('./loadedScript2.js', () => {
        newFunction2('kuku2')
    })
})
