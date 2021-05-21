const speechController = {
  speak: async (text) => {
    const audio = await clientApi.textToSpeech(text)
    textsToSpeak.push(audio)

    if(speechState === "none") {
      speechState = "speaking"

    }
    speechState = "none"
  }

}
