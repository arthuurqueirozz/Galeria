$(document).ready(() => {
    $('header button').click(() => {
        $('form').slideDown();
    })

    $('#cancel-btn').click(() => {
        $('form').slideUp();
    })
    
    $('form').on('submit', (e) => {
        e.preventDefault()

        const linkNewImage = $('#link-new-image').val()
        const newItem = $('<li style="display:none"></li>')

        $(`<img src="${linkNewImage}"/>`).appendTo(newItem)

        $(`
            <div class="overlay-image-link">
                <a href="${linkNewImage}" target="_blank" title="Ver em tamanho real">
                    Ver  imagem em tamanho real
                </a>
            </div>
            `).appendTo(newItem)
            $(newItem).appendTo('ul')
            $(newItem).fadeIn(300);
            $('#link-new-image').val('')
    })
})

