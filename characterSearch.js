fetch('characterData.json') 
  .then(response => response.json()) 
  .then(characterData => { 
    const searchInput = document.getElementById('searchInput'); 
    const resultDiv = document.getElementById('result'); 

    searchInput.addEventListener('input', function() { 
      const searchTerm = searchInput.value.toLowerCase(); 
      resultDiv.innerHTML = ''; // Xóa kết quả cũ

      if (searchTerm.length > 0) { // Chỉ tìm kiếm khi có ký tự
        const filteredCharacters = characterData.filter(character =>
          character.name.toLowerCase().includes(searchTerm) 
        );

        if (filteredCharacters.length > 0) {
          filteredCharacters.forEach(character => { 
            const characterDiv = document.createElement('div'); 
            characterDiv.classList.add('character'); 
            characterDiv.innerHTML = ` 
              <h2>${character.name}</h2>
              <p>Độ hiếm: ${character.rarity}</p>
              <p>Vai trò: ${character.role}</p>
              <p>Gợi ý: ${character.roll_advice}</p>
              <p>Thông tin: ${character.info}</p>
            `;
            resultDiv.appendChild(characterDiv); 
          });
        } else {
          resultDiv.innerHTML = "<p>Không tìm thấy nhân vật.</p>"; 
        }
      }
    });
  });