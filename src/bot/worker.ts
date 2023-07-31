const uciWorker = (file: string, actions: Array<string>) => () => {
  const worker = new Worker(file)

  let resolver: ((move: any) => void) | null = null

  worker.addEventListener("message", (e) => {
    const move = e.data.match(/^bestmove\s([a-h][1-8])([a-h][1-8])/)
    if (move && resolver) {
      resolver({ from: move[1], to: move[2] })
      resolver = null
    }
  })

  return (fen: any) =>
    new Promise((resolve, reject) => {
      if (resolver) {
        reject("Pending move is present")
        return
      }

      resolver = resolve
      worker.postMessage(`position fen ${fen}`)
      actions.forEach((action) => worker.postMessage(action))
    })
}

export default uciWorker
