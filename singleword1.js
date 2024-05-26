

/*function thankingwordsResponse(thankingWord) {
    let botResponse = "";
     if (thankingWord.includes('thanks')) {
        botResponse = "No problem! Is there anything else I can help you with?";
    } 
    return botResponse;
}*/

function handleAcceptingWords(acceptInput) {
    let botResponse = "";

        if (acceptInput === 'okey') {
            botResponse = 'Great! Let me know if you need any further assistance.';
        } else if (acceptInput === 'ok') {
            botResponse = 'Alright! If you have any more questions, feel free to ask.';
        } else if (acceptInput === 'yes') {
            botResponse = 'Perfect! How else can I assist you today?';
        } else if (acceptInput === 'yep') {
            botResponse = 'Got it! What would you like to know next?';
        } else if (acceptInput === 'yeah') {
            botResponse = 'Sure thing! Do you need help with anything else?';
        } else if (acceptInput === 'alright') {
            botResponse = 'Okay! If you have more questions, just let me know.';
        } else if (acceptInput === 'sure') {
            botResponse = 'Sure! What else can I do for you?';
        } else if (acceptInput === 'fine') {
            botResponse = 'Okay, let me know if you need further assistance.';
        } else if (acceptInput === 'cool') {
            botResponse = 'Cool! Feel free to ask if you have more questions.';
        }
    

    return botResponse;
}

function otherWord(matchedWordOther) {
    let botResponse = "";
    
    if (matchedWordOther === 'typewriter' || matchedWordOther === 'typewritter') {
        botResponse = "Here's some information about typewriters:<br><br>A typewriter is a mechanical or electromechanical machine for typing characters similar to those produced by a printer's movable type. It was widely used for writing before the advent of computers and word processors. Typewriters have a nostalgic charm and are still used by some enthusiasts and collectors. Would you like to know more about typewriters?";
    } else if (matchedWordOther === 'shorthand') {
        botResponse = "Let's delve into shorthand:<br><br>Shorthand is an abbreviated symbolic writing method that increases speed and brevity of writing. It's often used in situations requiring fast note-taking, such as during lectures, interviews, or court proceedings. Shorthand systems vary widely in complexity and usage. What else would you like to learn about shorthand?";
    } else if (matchedWordOther === 'book') {
        botResponse = "Here's some insight about books:<br><br>A book is a set of written, printed, or blank sheets bound together. Books come in various genres and formats, including novels, textbooks, poetry collections, and cookbooks. They serve as a source of knowledge, entertainment, and inspiration. What aspect of books interests you?";
    } else if (matchedWordOther === 'chair') {
        botResponse = "Let's have a seat and talk about chairs:<br><br>A chair is a piece of furniture designed for sitting on, typically with a back and four legs. Chairs come in various styles and materials, ranging from classic wooden designs to modern ergonomic models. They provide comfort and support for various activities, from dining to relaxation. What more would you like to know about chairs?";
    } else if (matchedWordOther === 'table') {
        botResponse = "Here's some insight about tables:<br><br>A table is a piece of furniture with a flat top and one or more legs, used as a surface for working or eating. Tables come in various shapes and sizes, including rectangular, round, and square, catering to different needs and preferences. They serve as central gathering points in homes, offices, and social settings. What aspect of tables interests you?";
    } else if (matchedWordOther === 'lamp') {
        botResponse = "Let's shed some light on lamps:<br><br>A lamp is a device for giving light, either one consisting of an electric bulb together with its holder and shade or cover, or one burning gas or oil and consisting of a wick or mantle and a glass shade. Lamps provide illumination and ambiance to indoor spaces, enhancing visibility and atmosphere. What more would you like to know about lamps?";
    } else if (matchedWordOther === 'pen') {
        botResponse = "Here's some insight about pens:<br><br>A pen is a tool used for writing or drawing with ink. Pens come in various types, including ballpoint, fountain, gel, and rollerball pens, each offering different writing experiences. Pens are essential tools for communication, creativity, and self-expression. What aspect of pens interests you?";
    } else if (matchedWordOther === 'notebook') {
        botResponse = "Let's flip through the pages of notebooks:<br><br>A notebook is a book with blank pages for recording notes or memoranda. Notebooks are used for various purposes, including journaling, sketching, planning, and organizing thoughts. They come in different sizes and bindings, catering to different preferences and needs. What more would you like to know about notebooks?";
    } else if (matchedWordOther === 'cup') {
        botResponse = "Here's some insight about cups:<br><br>A cup is a small open container used for drinking. Cups come in various materials, including ceramic, glass, metal, and plastic, each offering different advantages in terms of durability, insulation, and aesthetics. Cups are essential vessels for enjoying beverages such as coffee, tea, and water. What aspect of cups interests you?";
    } else if (matchedWordOther === 'plate') {
        botResponse = "Let's talk about plates:<br><br>A plate is a flat dish, typically circular and made of china, on which food is served or from which food is eaten. Plates come in various sizes and designs, ranging from simple white dinnerware to decorative and ornate pieces. They play a central role in dining etiquette and presentation. What more would you like to know about plates?";
    } else if (matchedWordOther === 'spoon') {
        botResponse = "Here's some insight about spoons:<br><br>A spoon is an implement consisting of a small, shallow oval or round bowl on a long handle, used for eating, stirring, and serving food. Spoons come in various sizes and types, including teaspoons, tablespoons, and serving spoons, each serving different purposes in the kitchen and dining table. What aspect of spoons interests you?";
    } else if (matchedWordOther === 'fork') {
        botResponse = "Let's talk about forks:<br><br>A fork is an implement with two or more prongs used for lifting food to the mouth or holding it when cutting. Forks come in various sizes and designs, including dinner forks, salad forks, and dessert forks, each serving different purposes in meal consumption. They are essential utensils for dining etiquette and culinary enjoyment. What more would you like to know about forks?";
    } else if (matchedWordOther === 'knife') {
        botResponse = "Here's some insight about knives:<br><br>A knife is a tool with a cutting edge or blade attached to a handle. Knives come in various types, including chef's knives, paring knives, and serrated knives, each designed for specific cutting tasks in the kitchen. Knives are essential culinary tools used for food preparation, cooking, and serving. What aspect of knives interests you?";
    } else if (matchedWordOther === 'phone') {
        botResponse = "Let's talk about phones:<br><br>A phone, short for telephone, is a device that transmits sound over distances. Phones come in various types, including landline phones, smartphones, and cordless phones, each offering different features and functionalities. Phones are essential communication tools that facilitate voice calls, text messaging, internet browsing, and other applications. What more would you like to know about phones?";
    } else if (matchedWordOther === 'computer') {
        botResponse = "Here's some insight about computers:<br><br>A computer is a programmable electronic device designed to perform arithmetic and logical operations. Computers come in various forms, including desktops, laptops, tablets, and smartphones, each offering different capabilities and functionalities. Computers play a central role in modern life, facilitating work, communication, entertainment, and education. What aspect of computers interests you?";
    } else if (matchedWordOther === 'keyboard') {
        botResponse = "Let's talk about keyboards:<br><br>A keyboard is a set of keys typically arranged in rows for operating a computer, typewriter, or similar device. Keyboards come in various layouts, including QWERTY, AZERTY, and DVORAK, each designed for different language preferences and typing styles. Keyboards are essential input devices for typing text, executing commands, and navigating digital interfaces. What more would you like to know about keyboards?";
    } else if (matchedWordOther === 'mouse') {
        botResponse = "Here's some insight about mice:<br><br>A mouse is a small handheld device that controls the movement of the cursor and selection of functions on a computer screen. Mice come in various types, including wired and wireless models, each offering different features such as sensitivity levels and ergonomic designs. Mice are essential input devices for navigating graphical user interfaces and interacting with digital content. What aspect of mice interests you?";
    } else if (matchedWordOther === 'television') {
        botResponse = "Let's talk about televisions:<br><br>A television, often abbreviated to TV, is a device used for viewing moving images and sound broadcasts. Televisions come in various types, including LCD, LED, OLED, and QLED, each offering different display technologies and features such as resolution, refresh rate, and smart functionalities. Televisions are essential entertainment devices that provide access to a wide range of content, from live broadcasts to streaming services. What more would you like to know about televisions?";
    } else if (matchedWordOther === 'remote') {
        botResponse = "Here's some insight about remotes:<br><br>A remote control is a component of an electronic device used to operate the device from a distance, usually wirelessly. Remotes come in various types, including infrared (IR), radio frequency (RF), and Bluetooth, each offering different ranges and functionalities. Remotes are essential accessories for controlling televisions, audio systems, home appliances, and other electronic devices. What aspect of remotes interests you?";
    } else if (matchedWordOther === 'window') {
        botResponse = "Let's talk about windows:<br><br>A window is an opening in the wall or roof of a building or vehicle that is fitted with glass or other transparent material. Windows serve various purposes, including providing natural light, ventilation, and views of the outdoors. Windows come in various types, including casement, sliding, and awning windows, each offering different functionalities and aesthetics. What aspect of windows interests you?";
    } else if (matchedWordOther === 'door') {
        botResponse = "Here's some insight about doors:<br><br>A door is a hinged, sliding, or revolving barrier at the entrance to a building, room, or vehicle, or in the framework of a cupboard. Doors serve essential functions such as providing security, privacy, and access control. Doors come in various materials, styles, and designs, ranging from solid wood to glass-panelled doors, each serving different purposes and aesthetics. What aspect of doors interests you?";
    } else if (matchedWordOther === 'bed') {
        botResponse = "Let's talk about beds:<br><br>A bed is a piece of furniture for sleep or rest, typically a framework with a mattress and coverings. Beds come in various sizes, including single, double, queen, and king, each offering different sleeping spaces and comfort levels. Beds play a crucial role in promoting restful sleep and overall well-being. What more would you like to know about beds?";
    } else if (matchedWordOther === 'pillow') {
        botResponse = "Here's some insight about pillows:<br><br>A pillow is a rectangular cloth bag stuffed with feathers, foam, or other soft materials, used to support the head when lying down. Pillows come in various sizes, shapes, and firmness levels, catering to different sleeping preferences and positions. Pillows play a crucial role in providing comfort and spinal alignment during sleep. What aspect of pillows interests you?";
    } else if (matchedWordOther === 'blanket') {
        botResponse = "Let's talk about blankets:<br><br>A blanket is a large piece of woolen or similar material used as a covering on a bed or elsewhere for warmth. Blankets come in various materials, including wool, cotton, fleece, and acrylic, each offering different levels of warmth and softness. Blankets provide comfort and insulation, making them essential for staying cozy during colder weather. What more would you like to know about blankets?";
    } else if (matchedWordOther === 'towel') {
        botResponse = "Here's some insight about towels:<br><br>A towel is a piece of thick absorbent cloth or paper used for drying oneself or wiping things dry. Towels come in various types, including bath towels, hand towels, and kitchen towels, each serving different drying purposes. Towels are essential hygiene and cleaning tools used in bathrooms, kitchens, and other areas. What aspect of towels interests you?";
    } else if (matchedWordOther === 'soap') {
        botResponse = "Let's talk about soap:<br><br>Soap is a substance used with water for washing and cleaning, made of a compound of natural oils or fats with sodium hydroxide or another strong alkali. Soap comes in various forms, including bar soap, liquid soap, and foam soap, each offering different textures and scents. Soap is essential for personal hygiene and cleanliness, helping to remove dirt, bacteria, and impurities from the skin. What more would you like to know about soap?";
    } else if (matchedWordOther === 'shampoo') {
        botResponse = "Here's some insight about shampoo:<br><br>Shampoo is a hair care product used for cleaning hair. It typically contains surfactants that create lather to remove dirt, oil, and product buildup from the scalp and hair strands. Shampoo comes in various formulas, including moisturizing, volumizing, and clarifying, catering to different hair types and needs. Shampoo is an essential part of personal hygiene and grooming routines. What aspect of shampoo interests you?";
    } else if (matchedWordOther === 'toothbrush') {
        botResponse = "Let's talk about toothbrushes:<br><br>A toothbrush is a small brush with a long handle, used for cleaning the teeth. Toothbrushes come in various designs, including manual and electric, each offering different features such as bristle texture, head size, and power modes. Toothbrushes are essential tools for maintaining oral hygiene and preventing dental issues such as cavities and gum disease. What more would you like to know about toothbrushes?";
    } else if (matchedWordOther === 'mirror') {
        botResponse = "Let's talk about mirrors:<br><br>A mirror is a reflective surface that reflects a clear image. Mirrors come in various shapes, sizes, and designs, ranging from simple wall-mounted mirrors to decorative vanity mirrors. Mirrors serve practical purposes such as personal grooming, checking appearance, and enhancing interior decor. Mirrors also have symbolic and metaphorical meanings in literature, art, and culture. What more would you like to know about mirrors?";
    } else if (matchedWordOther === 'clock') {
        botResponse = "Here's some insight about clocks:<br><br>A clock is an instrument used to indicate, keep, and coordinate time. Clocks come in various types, including analog, digital, mechanical, and atomic clocks, each offering different features and accuracies. Clocks serve essential functions in daily life, including time management, scheduling, and coordination of activities. Clocks also have cultural significance and artistic value in various contexts. What more would you like to know about clocks?";
    } else if (matchedWordOther === 'calendar') {
        botResponse = "Let's talk about calendars:<br><br>A calendar is a system of organizing days for social, religious, commercial, or administrative purposes. Calendars come in various formats, including wall calendars, desk calendars, and digital calendars, each displaying dates, months, and years in different layouts. Calendars are essential tools for planning events, tracking appointments, and managing schedules. Calendars also reflect cultural, religious, and astronomical conventions. What more would you like to know about calendars?";
    } else if (matchedWordOther === 'bag') {
        botResponse = "Here's some insight about bags:<br><br>A bag is a flexible container with an opening at the top, used for carrying things. Bags come in various styles, sizes, and materials, including backpacks, tote bags, and messenger bags, each designed for specific purposes and preferences. Bags serve practical functions such as carrying personal belongings, groceries, and work essentials. Bags also have cultural significance and fashion appeal in different contexts. What more would you like to know about bags?";
    } else if (matchedWordOther === 'shoes') {
        botResponse = "Let's talk about shoes:<br><br>Shoes are items of footwear intended to protect and comfort the human foot. Shoes come in various styles, including sneakers, boots, sandals, and dress shoes, each designed for different activities, environments, and occasions. Shoes serve functional purposes such as providing support, traction, and cushioning for the feet. Shoes also have cultural significance and fashion appeal, reflecting personal style and identity. What more would you like to know about shoes?";
    } else if (matchedWordOther === 'jacket') {
        botResponse = "Here's some insight about jackets:<br><br>A jacket is a short coat, typically extending to the hips or slightly below. Jackets come in various styles, materials, and designs, including denim jackets, leather jackets, and bomber jackets, each offering different levels of warmth, protection, and fashion appeal. Jackets serve practical functions such as weather resistance, insulation, and mobility. Jackets also have cultural significance and symbolic meanings in fashion and subcultures. What more would you like to know about jackets?";
    } else if (matchedWordOther === 'hat') {
        botResponse = "Let's talk about hats:<br><br>A hat is a shaped covering for the head worn for warmth, as a fashion item, or as part of a uniform. Hats come in various styles, including baseball caps, fedoras, beanies, and sun hats, each serving different functional and aesthetic purposes. Hats serve practical functions such as sun protection, warmth, and rain resistance. Hats also have cultural significance and symbolic meanings in fashion, identity, and social status. What more would you like to know about hats?";
    } else if (matchedWordOther === 'glasses') {
        botResponse = "Here's some insight about glasses:<br><br>Glasses, also known as eyeglasses or spectacles, are vision aids consisting of lenses mounted in a frame that holds them in front of a person's eyes. Glasses come in various types, including prescription glasses, sunglasses, and reading glasses, each offering different vision correction and protection features. Glasses serve functional purposes such as correcting vision problems, reducing glare, and protecting the eyes from UV radiation. Glasses also have fashion appeal and style significance in accessorizing personal appearance. What more would you like to know about glasses?";
    } else if (matchedWordOther === 'earphones' || matchedWordOther === 'headphones') {
        botResponse = "Let's talk about earphones and headphones:<br><br>Earphones and headphones are audio devices worn over or inside the ears for listening to audio content such as music, podcasts, and phone calls. Earphones, also known as in-ear headphones or earbuds, fit inside the ear canal, while headphones, also known as over-ear or on-ear headphones, rest over the ears. Earphones and headphones come in various types, including wired and wireless, each offering different features such as sound quality, comfort, and noise cancellation. They are essential accessories for enjoying audio entertainment and communication on the go. What more would you like to know about earphones and headphones?";
    } else if (matchedWordOther === 'camera') {
        botResponse = "Here's some insight about cameras:<br><br>A camera is an optical instrument used for capturing or recording images and videos. Cameras come in various types, including digital cameras, DSLRs, mirrorless cameras, and smartphone cameras, each offering different features and capabilities. Cameras serve essential functions in photography, videography, and visual communication, capturing moments, documenting events, and expressing creativity. Cameras also have cultural significance and artistic value, shaping perceptions and memories. What more would you like to know about cameras?";
    } else if (matchedWordOther === 'painting') {
        botResponse = "Let's talk about paintings:<br><br>A painting is a visual artwork created using pigments on a surface such as canvas, paper, or wood. Paintings come in various styles, genres, and techniques, including oil, watercolor, acrylic, and mixed media, each offering different expressive possibilities and aesthetic qualities. Paintings serve artistic, cultural, and personal purposes, conveying ideas, emotions, and narratives through imagery and symbolism. Paintings also have historical significance and commercial value, reflecting trends, movements, and individual artists' visions. What more would you like to know about paintings?";
    } else if (matchedWordOther === 'sculpture') {
        botResponse = "Here's some insight about sculptures:<br><br>A sculpture is a three-dimensional artwork created by shaping or combining materials such as stone, wood, metal, clay, or plastic. Sculptures come in various forms, including statues, reliefs, installations, and kinetic sculptures, each offering different spatial and tactile experiences. Sculptures serve artistic, commemorative, and decorative purposes, representing ideas, figures, and concepts in physical form. Sculptures also have cultural significance and historical value, reflecting traditions, beliefs, and social contexts. What more would you like to know about sculptures?";
    } else if (matchedWordOther === 'music') {
        botResponse = "Let's talk about music:<br><br>Music is an art form and cultural activity that combines sounds organized in time. Music encompasses a wide range of genres, styles, and traditions, including classical, jazz, rock, pop, hip-hop, and electronic music, each offering different expressive qualities and cultural meanings. Music serves various purposes, including entertainment, expression, ritual, and communication, resonating with listeners' emotions and experiences. Music also has historical significance and social impact, reflecting and shaping cultural identities and movements. What more would you like to know about music?";
    } else if (matchedWordOther === 'film') {
        botResponse = "Here's some insight about films:<br><br>A film, also known as a movie or motion picture, is a visual storytelling medium consisting of moving images projected onto a screen. Films come in various genres, including drama, comedy, action, horror, and documentary, each offering different narratives, themes, and emotional experiences. Films combine elements such as cinematography, editing, sound design, and acting to convey stories, ideas, and messages to audiences. Films serve entertainment, artistic, and cultural purposes, reflecting and shaping societal values and perspectives. What more would you like to know about films?";
    } else if (matchedWordOther === 'book') {
        botResponse = "Here's some insight about books:<br><br>A book is a set of written, printed, or blank sheets bound together. Books come in various genres and formats, including novels, textbooks, poetry collections, and cookbooks. They serve as a source of knowledge, entertainment, and inspiration. What aspect of books interests you?";
    }
return botResponse;
}

function greetingsResponse(greeting) {
    let botResponse = "";
    if (greeting === 'hello') {
        botResponse = "Hello! How can I assist you today?";
    } else if (greeting === 'hi') {
        botResponse = "Hi there! What can I do for you?";
    } else if (greeting === 'hey') {
        botResponse = "Hey! How can I help you?";
    } else if (greeting === 'yo') {
        botResponse = "Yo! What's up?";
    } else if (greeting === 'greetings') {
        botResponse = "Greetings! How may I assist you?";
    } else if (greeting === 'salutations') {
        botResponse = "Salutations! What can I do for you today?";
    } else if (greeting === 'howdy') {
        botResponse = "Howdy! How can I help?";
    } else if (greeting === 'hola') {
        botResponse = "Hola! ¿En qué puedo ayudarte?";
    } else if (greeting === 'bonjour') {
        botResponse = "Bonjour! Comment puis-je vous aider?";
    } else if (greeting === 'ciao') {
        botResponse = "Ciao! Come posso aiutarti?";
    } else if (greeting === 'hallo') {
        botResponse = "Hallo! Wie kann ich Ihnen helfen?";
    } else if (greeting === 'namaste') {
        botResponse = "Namaste! How may I assist you?";
    } 
    return botResponse;
}
