const form = document.getElementById('surveyForm');
        const resetButton = document.getElementById('resetButton');
        const submitButton = document.getElementById('submitButton');
        const popup = document.getElementById('popup');
        const popupContent = document.getElementById('popupContent');
        const closePopup = document.getElementById('closePopup');
        const overlay = document.getElementById('overlay');

        resetButton.addEventListener('click', () => {
            form.reset();
        });

        submitButton.addEventListener('click', () => {
            if (form.checkValidity()) {
                // Collect form data
                const firstName = document.getElementById('firstName').value;
                const lastName = document.getElementById('lastName').value;
                const dob = document.getElementById('dob').value;
                const country = document.getElementById('country').value;
                const genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
                const genderValues = Array.from(genderCheckboxes).map(checkbox => checkbox.value);
                const profession = document.getElementById('profession').value;
                const email = document.getElementById('email').value;
                const mobile = document.getElementById('mobile').value;

                // Construct popup content
                const content = `
                    <p><strong>First Name:</strong> ${firstName}</p>
                    <p><strong>Last Name:</strong> ${lastName}</p>
                    <p><strong>Date of Birth:</strong> ${dob}</p>
                    <p><strong>Country:</strong> ${country}</p>
                    <p><strong>Gender:</strong> ${genderValues.join(', ')}</p>
                    <p><strong>Profession:</strong> ${profession}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Mobile Number:</strong> ${mobile}</p>
                `;
                popupContent.innerHTML = content;

                // Show the popup and overlay
                popup.style.display = 'block';
                overlay.style.display = 'block';
            }
        });

        closePopup.addEventListener('click', () => {
            // Close the popup and overlay, then reset the form
            popup.style.display = 'none';
            overlay.style.display = 'none';
            form.reset();
        });
    