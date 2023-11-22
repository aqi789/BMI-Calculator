
  document.addEventListener('DOMContentLoaded', function () {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const bmiOutput = document.getElementById('bmi');
    const descriptionOutput = document.getElementById('desc');
    const submitButton = document.querySelector('button[type="submit"]');
    const resetButton = document.querySelector('button[type="reset"]');

    submitButton.addEventListener('click', calculateBMI);
    resetButton.addEventListener('click', resetForm);

    function calculateBMI() {
      const height = parseFloat(heightInput.value);
      const weight = parseFloat(weightInput.value);

      if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Please enter valid height and weight.');
        return;
      }

      const bmi = calculateBMIValue(height, weight);
      const description = interpretBMI(bmi);

      bmiOutput.textContent = bmi.toFixed(2);
      descriptionOutput.textContent = description;
      updateBMIColor(bmi);
    }

    function calculateBMIValue(height, weight) {
      // BMI formula: weight (kg) / (height (m) * height (m))
      return weight / ((height / 100) * (height / 100));
    }

    function interpretBMI(bmi) {
      if (bmi < 18.5) {
        return 'Underweight';
      } else if (bmi < 25) {
        return 'Normal';
      } else if (bmi < 30) {
        return 'Overweight';
      } else {
        return 'Obese';
      }
    }

    function updateBMIColor(bmi) {
      const root = document.documentElement;
      if (bmi < 18.5) {
        root.style.setProperty('--color', 'var(--underweight)');
      } else if (bmi < 25) {
        root.style.setProperty('--color', 'var(--normal)');
      } else if (bmi < 30) {
        root.style.setProperty('--color', 'var(--overweight)');
      } else {
        root.style.setProperty('--color', 'var(--obese)');
      }
    }

    function resetForm() {
      heightInput.value = '';
      weightInput.value = '';
      bmiOutput.textContent = '0';
      descriptionOutput.textContent = 'N/A';
      updateBMIColor(0);
    }
  });

