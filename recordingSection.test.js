// recordingSection.test.js
describe('Recording Section', () => {
    beforeEach(() => {
      // Set up the DOM
      document.body.innerHTML = `
        <div class="mb-2">
          <label for="realtimeRecording"><strong><h3>Or record in real-time:</h3></strong></label>
          <br>
          <button id="recordButton" onclick="startRecording()">Start Recording</button>
          <button id="stopButton" onclick="stopRecording()" disabled>Stop Recording</button>
          <span id="recordingStatus" style="color: red; font-weight: bold; display: none;">Recording...</span>
          <span id="timer" style="color: green; font-weight: bold;">00:00</span>
        </div>
      `;
    });
  
    test('Start Recording button text', () => {
      // Get the text content of the "Start Recording" button
      const startButtonText = document.getElementById("recordButton").textContent;
      console.log("Start Recording Button Text: " + startButtonText);
  
      expect(startButtonText).toBe("Start Recording");
    });
  });  