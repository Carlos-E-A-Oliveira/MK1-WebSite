document.addEventListener('DOMContentLoaded', function()
{
    const div2 = document.getElementById('p2_id');
    const div3 = document.getElementById('p3_id');
    const div4 = document.getElementById('p4_id');
    const div5 = document.getElementById('p5_id');
    const div6 = document.getElementById('p6_id');
    const div7 = document.getElementById('p7_id');
    const char = document.getElementById('char');
    const text = document.getElementById('text_char');
    const name = document.getElementById('char_name');
    const som_icone = document.getElementById('sound_id');
    const som_icone2 = document.getElementById('sound_id2');
    const traduzir = document.getElementById('English_translade');
    playSound.muted = true;

    /* Configurar som ON/OFF do site -  Modo normal*/
    som_icone.addEventListener('click', function()
    {
        
        if(playSound.muted)
        {
            playSound.muted = false;
            som_icone.style.backgroundImage = 'url(./Icons/sound_on.png)';
            som_icone2.style.backgroundImage = 'url(./Icons/sound_on.png)';
            playSound('./audio/select.mp3');
        } else 
        {
            playSound.muted = true;
            som_icone.style.backgroundImage = 'url(./Icons/sound_off.png)';
            som_icone2.style.backgroundImage = 'url(./Icons/sound_off.png)';
        }
        
        
    })

    /* Configurar som ON/OFF do site - Modo celular*/
    som_icone2.addEventListener('click', function()
    {
        
        if(playSound.muted)
        {
            playSound.muted = false;
            som_icone.style.backgroundImage = 'url(./Icons/sound_on.png)';
            som_icone2.style.backgroundImage = 'url(./Icons/sound_on.png)';
            playSound('./audio/select.mp3');
        } else 
        {
            playSound.muted = true;
            som_icone.style.backgroundImage = 'url(./Icons/sound_off.png)';
            som_icone2.style.backgroundImage = 'url(./Icons/sound_off.png)';
        }
        
        
    })

    div2.addEventListener('click', function()
    {
        char.style.backgroundImage = 'url(./Personagem/scorpion1.PNG)';
        text.textContent = "Scorpion, agora irmão de Sub-Zero, é um dos membros mais letais e corajosos dos Lin Kuei, assim como foi o seu falecido pai. O ninja não é rival do irmão inicialmente, como acontece em quase toda a saga Mortal Kombat, mas se vê em conflito interno ao não concordar com as ações de expansão de Sub-Zero."
        name.textContent = "SCORPION";
        if(playSound.muted == false)
        {
            playSound('./audio/scorpion.mp3');
        }

    })

    div3.addEventListener('click', function()
    {
        char.style.backgroundImage = 'url(./Personagem/sub1.PNG)';
        text.textContent = "Sub-Zero é grão-mestre dos Lin Kuei, liderando o clã contra ameaças de outros reinos e planos. Sub-Zero está cansado da posição do clã e pretende expandir o próprio domínio, tirando o clã das sombras e mirando conquistas mais ousadas.";
        name.textContent = "SUB-ZERO";
        if(playSound.muted == false)
        {
            playSound('./audio/sub.mp3');
        }
    })

    div4.addEventListener('click', function()
    {
        char.style.backgroundImage = 'url(./Personagem/raiden1.PNG)';
        text.textContent = "Sem os poderes divinos, Raiden é conhecido por sua bondade. Ele é também um fazendeiro honrado, tanto que é escolhido do próprio Liu Kang para ser o campeão da Terra no próximo torneio contra outros planos. Apesar de não concordar inicialmente em participar, Raiden percebe que essa é a única forma de ajudar seus conterrâneos.";
        name.textContent = "RAIDEN";
        if(playSound.muted == false)
        {
            playSound('./audio/raiden.mp3');
        }
    })

    div5.addEventListener('click', function()
    {
        char.style.backgroundImage = 'url(./Personagem/reptile1.PNG)';
        text.textContent = "Reptile está acostumado a viver na margem da sociedade como um zaterrano, raça especialista em camuflagem e rejeitada na Exoterra. Aqui, ele alterna de aparência entre a sua forma original, de um lagarto e do ninja verde. Essa habilidade, entretanto, é também sua ruína: o guerreiro é rejeitado pelo próprio clã e agora busca outro lar.";
        name.textContent = "REPTILE";
        if(playSound.muted == false)
        {
            playSound('./audio/reptile.mp3');
        }
    })

    div6.addEventListener('click', function()
    {
        char.style.backgroundImage = 'url(./Personagem/liu_kang1.PNG)';
        text.textContent = "Principal representante da Terra, Liu Kang agora é Deus do Fogo e inicialmente responsável por controlar a Ampulheta do tempo.";
        name.textContent = "LIU KANG";
        if(playSound.muted == false)
        {
            playSound('./audio/liu-kang.mp3');
        }
    })

    div7.addEventListener('click', function()
    {
        char.style.backgroundImage = 'url(./Personagem/jonny1.PNG)';
        text.textContent = "O universo mudou, mas a vida e a personalidade de Johnny Cage continuam parecidas com as de jogos anteriores: ele é um astro do cinema de ação com um ego gigantesco, mas uma carreira em declínio. Viciado em popularidade nas redes sociais e tentando se manter relevante, ele se junta aos lutadores da Terra para provar que ainda pode ser levado a sério.";
        name.textContent = "JOHNNY CAGE";
        if(playSound.muted == false)
        {
            playSound('./audio/jonny.mp3');
        }
        
        
    })

    function playSound (soundPath)
    {
        const som = new Audio(soundPath)
        som.play();
    }

    
})




