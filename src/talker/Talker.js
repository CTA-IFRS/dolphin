
export default class Talker {   

    //   private currentRecogRef: any = null;
    //   private continuityEventBck: any = null;

    /*
    *   workEvent:   (m:SpeechRecognitionResultList) => void
    *   continuityEvent: () => boolean
    */
      constructor(workEvent, continuityEvent) {
            this.setWorkEvent(workEvent);
            this.setContinuityEvent(continuityEvent);
            this._running = false;
      }

    /**
     * f: (m:SpeechRecognitionResultList) => void 
     */
      setWorkEvent(f) {
        this.workEvent = f;
        return this;
      }

    /**
     * f: () => boolean
     */
      setContinuityEvent(f){
        this.continuityEvent = f;
        this.continuityEventBck = f; 

        return this;
      }

      isRunning() {
        return this._running;
      }

      hasSupport() {
        return (window["webkitSpeechRecognition"] || window["SpeechRecognition"]) !== undefined;
      }

      start() {
          this.continuityEvent = this.continuityEventBck;
          let currentTalker = this;
          let recogService = function () {
            let SpeechRecog = window["webkitSpeechRecognition"] || window["SpeechRecognition"];

            let recog = new SpeechRecog();
            recog.lang = "pt-BR";
            recog.continuous = true;
            recog.interimResults = false;

            recog.onresult = function (ev) {
                currentTalker.workEvent(ev.results);
            }

            recog.onaudioend = function (ev) {
              //console.log("AUDIO_END");
              if (currentTalker.continuityEvent()) {                
                currentTalker.currentRecogRef = recogService();
              }
            }
            
            recog.start();
            currentTalker._running = true;

            return recog;
          }

          currentTalker.currentRecogRef = recogService();
      }

      stop() {
        this.continuityEvent = Talker.stdStopEvent;
        this.currentRecogRef.stop();
        this._running = false;
      }

      static stdStopEvent = () => false;

      /**
       * msg:string
      */
      static speak(msg) {
        let voiceMsg = new SpeechSynthesisUtterance(msg);
        window.speechSynthesis.speak(voiceMsg);
      }

    /**
     * f: (m:SpeechRecognitionResultList) => void 
     * c: () => boolean
     */
      static hear(f, c) {
        
        let recogService = function () {
            let SpeechRecog = window['webkitSpeechRecognition'] || window['SpeechRecognition'];

            let recog = new SpeechRecog();
            recog.lang = "pt-BR";
            recog.continuous = true;
            recog.interimResults = false;
            
            recog.onresult = function (ev) {
                f(ev.results);
            }

            recog.onaudioend = function (ev) {
              //console.log("AUDIO_END");
              if (c()) recogService();
            }
            
            recog.start();
          }

        recogService();

      }
};