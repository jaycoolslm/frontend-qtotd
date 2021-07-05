let happyFace = document.getElementById('happy')
        let sadFace = document.getElementById('sad')

        let container = document.getElementById('aBody')

        function switchVisible() {
            sadFace.classList.add('hide')
            happyFace.classList.remove('hide')
        }

        function reverseVisible() {
            sadFace.classList.remove('hide')
            happyFace.classList.add('hide')
        }

        container.addEventListener('mouseover', switchVisible)
        container.addEventListener('mouseout', reverseVisible)