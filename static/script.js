function copyToClipboard(button) {
       const codeBlock = button.previousElementSibling;
       const text = codeBlock.textContent.trim();
       
       navigator.clipboard.writeText(text).then(() => {
           // Visual feedback
           button.classList.add('copied');
           setTimeout(() => {
               button.classList.remove('copied');
           }, 2000);
       }).catch(err => {
           console.error('Failed to copy:', err);
       });
   }

   // Wrap all code blocks with container and add copy button
   document.addEventListener('DOMContentLoaded', () => {
       document.querySelectorAll('code').forEach(codeBlock => {
           const container = document.createElement('div');
           container.className = 'code-container';
           
           // Move the code block into the container
           codeBlock.parentNode.insertBefore(container, codeBlock);
           container.appendChild(codeBlock);
           
           // Add the copy button
           const copyButton = document.createElement('button');
           copyButton.className = 'copy-btn';
           copyButton.setAttribute('aria-label', 'Copy code');
           copyButton.onclick = function() { copyToClipboard(this); };
           container.appendChild(copyButton);
       });
   });