
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    document.querySelector('button').addEventListener("click", function() {
        const startPrice = document.querySelector('input[name="startPrice"]').value;
        const percent = document.querySelector('input[name="percent"]').value;  
        const result = startPrice - (startPrice * (percent/100));
        document.getElementById("price").innerHTML = result.toFixed(2);
      });
});