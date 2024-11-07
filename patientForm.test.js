describe("Patient Form Tests", () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <form id="patient-form">
          <input id="name" required />
          <input id="age" required />
          <input id="address" required />
          <input id="contact" required />
          <input type="file" id="lungSounds" />
          <button id="analyzeButton" type="submit">Analyze Lung Sound</button>
        </form>
      `;
    });
  
    test("should validate required fields", () => {
      expect(document.getElementById("name").value).toBe("");
      expect(document.getElementById("age").value).toBe("");
      expect(document.getElementById("address").value).toBe("");
      expect(document.getElementById("contact").value).toBe("");
  
      document.getElementById("name").value = "John Doe";
      document.getElementById("age").value = "45";
      document.getElementById("address").value = "123 Main St, City";
      document.getElementById("contact").value = "(123) 456-7890";
  
      expect(document.getElementById("name").value).toBe("John Doe");
      expect(document.getElementById("age").value).toBe("45");
      expect(document.getElementById("address").value).toBe("123 Main St, City");
      expect(document.getElementById("contact").value).toBe("(123) 456-7890");
    });
  
    test("should only accept .wav files for lung sound upload", () => {
      const fileInput = document.getElementById("lungSounds");
  
      const file = new File(["content"], "test.txt", { type: "text/plain" });
      Object.defineProperty(fileInput, "files", { value: [file], writable: true });
  
      expect(fileInput.files[0].type).not.toBe("audio/wav");
  
      const wavFile = new File(["content"], "test.wav", { type: "audio/wav" });
      Object.defineProperty(fileInput, "files", { value: [wavFile], writable: true });
  
      expect(fileInput.files[0].type).toBe("audio/wav");
    });
  
  });  