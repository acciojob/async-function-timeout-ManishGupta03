//your JS code here. If required.
 async function delayAndResolve(delayTime) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve('Message after delay');
          }, delayTime);
        });
      }

      async function displayMessage() {
        const outputElement = document.getElementById('output');

        try {
          const message = await delayAndResolve(3000); // Wait for 3 seconds
          outputElement.textContent = message;
        } catch (error) {
          console.error('An error occurred:', error);
        }
      }

      displayMessage();