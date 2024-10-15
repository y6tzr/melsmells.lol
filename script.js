document.getElementById('guess-btn').addEventListener('click', function() {
    const smells = [
        'Freshly brewed coffee with a hint of gym socks',
        'Rain-soaked laundry left in the machine too long',
        'Sunscreen and melted ice cream',
        'Burnt toast with a side of ambition',
        'A mysterious mix of cologne and fast food',
        'Ocean breeze... if the ocean had dirty socks in it',
        'The classic, just-out-of-bed morning funk'
    ];

    const randomSmell = smells[Math.floor(Math.random() * smells.length)];
    document.getElementById('aroma').innerText = `Today, Mel smells like: ${randomSmell}`;
});
