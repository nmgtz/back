
function handleCodeWords(matchedWordesCode) {
    let botResponse = '';

    if (matchedWordesCode.includes('programming')) {
        botResponse = 'Programming is the process of writing computer programs. It involves creating a set of instructions that tell a computer how to perform a task. Common programming languages include Python, Java, and C++.';
    } else if (matchedWordesCode.includes('computer')) {
        botResponse = 'A computer is an electronic device that processes data according to a set of instructions. Computers can perform a wide range of tasks, from simple calculations to complex simulations, and can be found in various forms such as desktops, laptops, and servers.';
    } else if (matchedWordesCode.includes('code')) {
        botResponse = 'Code is the text written in a programming language that forms the instructions for a computer program. It is essential for creating software, applications, and websites, and can be written in languages such as JavaScript, Python, and C++.';
    } else if (matchedWordesCode.includes('algorithm')) {
        botResponse = 'An algorithm is a step-by-step procedure for solving a problem or performing a task. Algorithms are fundamental to programming and computer science, as they provide a clear set of instructions to achieve a desired outcome.';
    } else if (matchedWordesCode.includes('debug')) {
        botResponse = 'Debugging is the process of identifying and removing errors or bugs in a computer program. It is a critical part of software development to ensure that programs run correctly and efficiently.';
    } else if (matchedWordesCode.includes('compile')) {
        botResponse = 'Compiling is the process of converting code written in a high-level programming language into machine code that a computer can execute. This is necessary for languages like C and C++ to create executable programs.';
    } else if (matchedWordesCode.includes('execute')) {
        botResponse = 'To execute means to run a program or a piece of code. Execution involves carrying out the instructions written in the code to perform a specific task or operation.';
    } else if (matchedWordesCode.includes('variable')) {
        botResponse = 'A variable is a storage location identified by a name that can hold data which may change during program execution. Variables are used to store values and are fundamental in programming for holding information.';
    } else if (matchedWordesCode.includes('function')) {
        botResponse = 'A function is a reusable block of code that performs a specific task. Functions help organize code, making it modular and easier to manage. They can take inputs (arguments) and return outputs.';
    } else if (matchedWordesCode.includes('loop')) {
        botResponse = 'A loop is a sequence of instructions that repeats until a certain condition is met. Loops are used to perform repetitive tasks efficiently, and common types include for-loops and while-loops.';
    } else if (matchedWordesCode.includes('condition')) {
        botResponse = 'A condition is a statement that controls the flow of execution based on whether a certain condition is true or false. Conditional statements, such as if-else, allow programs to make decisions and execute different code paths.';
    } else if (matchedWordesCode.includes('array')) {
        botResponse = 'An array is a data structure that stores a collection of elements, typically of the same type, in a specific order. Arrays allow efficient access and manipulation of multiple items using indices.';
    } else if (matchedWordesCode.includes('object')) {
        botResponse = 'An object is an instance of a class that encapsulates data and behavior in object-oriented programming. Objects are fundamental to OOP, allowing for the modeling of real-world entities and their interactions.';
    } else if (matchedWordesCode.includes('class')) {
        botResponse = 'A class is a blueprint for creating objects in object-oriented programming. Classes define properties (attributes) and methods (functions) that the objects created from the class will have.';
    } else if (matchedWordesCode.includes('inheritance')) {
        botResponse = 'Inheritance is a feature of object-oriented programming that allows a class to inherit properties and methods from another class. Inheritance promotes code reuse and establishes a relationship between classes.';
    } else if (matchedWordesCode.includes('interface')) {
        botResponse = 'An interface is a defined structure that specifies a set of methods that a class must implement, without providing the implementation. Interfaces are used to define contracts in programming, ensuring that different classes adhere to the same set of methods.';
    } else if (matchedWordesCode.includes('network')) {
        botResponse = 'A network is a group of interconnected devices that can communicate with each other. Networks allow computers to share resources and information, and can be local (LAN) or wide-area (WAN).';
    } else if (matchedWordesCode.includes('database')) {
        botResponse = 'A database is an organized collection of data that can be easily accessed, managed, and updated. Databases are used to store large amounts of information and are crucial for many applications.';
    } else if (matchedWordesCode.includes('server')) {
        botResponse = 'A server is a computer or system that provides resources, data, services, or programs to other computers, known as clients, over a network. Servers can host websites, manage email, and much more.';
    } else if (matchedWordesCode.includes('client')) {
        botResponse = 'A client is a computer or software that accesses services provided by a server. Clients request resources or services from a server, which then processes and responds to these requests.';
    } else if (matchedWordesCode.includes('cloud')) {
        botResponse = 'Cloud computing refers to the delivery of computing services, such as storage, processing, and software, over the internet ("the cloud"). Cloud services allow for scalable resources and remote access to data.';
    } else if (matchedWordesCode.includes('storage')) {
        botResponse = 'Storage refers to the components, devices, and media that retain digital data. Storage can be internal (like a hard drive) or external (like cloud storage) and is essential for saving and accessing data.';
    } else if (matchedWordesCode.includes('hardware')) {
        botResponse = 'Hardware refers to the physical components of a computer system, such as the CPU, RAM, hard drive, and peripherals like the keyboard and mouse. Hardware is essential for running software and performing tasks.';
    } else if (matchedWordesCode.includes('software')) {
        botResponse = 'Software is a collection of programs and data that instructs a computer on how to perform specific tasks. Software can be system software (like operating systems) or application software (like word processors).';
    } else if (matchedWordesCode.includes('operating system')) {
        botResponse = 'An operating system (OS) is system software that manages computer hardware, software resources, and provides common services for computer programs. Examples include Windows, macOS, and Linux.';
    } else if (matchedWordesCode.includes('file')) {
        botResponse = 'A file is a digital document or a collection of data stored on a computer. Files can contain text, images, videos, or software and are essential for storing and organizing information.';
    } else if (matchedWordesCode.includes('folder')) {
        botResponse =" A folder, also known as a directory, is a virtual container within a computer's file system that can hold files and other folders. Folders help organize files into a hierarchical structure.";
    } else if (matchedWordesCode.includes('GUI')) {
        botResponse = 'A graphical user interface (GUI) is a user interface that includes graphical elements, such as windows, icons, and buttons. GUIs allow users to interact with electronic devices through visual indicators and controls.';
    } else if (matchedWordesCode.includes('CLI')) {
        botResponse = 'A command-line interface (CLI) is a text-based user interface used to interact with software and operating systems. Users type commands into a terminal to perform tasks, as opposed to using graphical elements.';
    } else if (matchedWordesCode.includes('encryption')) {
        botResponse = 'Encryption is the process of converting information or data into a code to prevent unauthorized access. Encrypted data can only be read by someone who has the decryption key.';
    } else if (matchedWordesCode.includes('decryption')) {
        botResponse = 'Decryption is the process of converting encrypted data back into its original form. Decryption requires a key or password to transform the data so it can be read and understood.';
    } else if (matchedWordesCode.includes('data')) {
        botResponse = 'Data refers to information processed or stored by a computer. This information can be in the form of text documents, images, audio clips, software programs, or other types of digital content.';
    } else if (matchedWordesCode.includes('backup')) {
        botResponse = 'A backup is a copy of data that is stored separately from the original to protect against data loss. Backups are crucial for recovering data in case of hardware failure, software issues, or cyber-attacks.';
    } else if (matchedWordesCode.includes('restore')) {
        botResponse = 'Restoring is the process of returning data from a backup to its original or a new location. This is typically done after data loss or corruption to recover the lost information.';
    } else if (matchedWordesCode.includes('security')) {
        botResponse = 'Security in computing refers to protecting systems, networks, and data from digital attacks, unauthorized access, and damage. Measures include antivirus software, firewalls, and encryption.';
    } else if (matchedWordesCode.includes('virus')) {
        botResponse = 'A computer virus is a type of malicious software designed to replicate itself and spread to other computers. Viruses can damage systems, corrupt data, and steal personal information.';
    } else if (matchedWordesCode.includes('firewall')) {
        botResponse = 'A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules. Firewalls help protect networks from unauthorized access.';
    } else if (matchedWordesCode.includes('protocol')) {
        botResponse = 'A protocol is a set of rules that determine how data is transmitted and received over a network. Examples include HTTP for web traffic, FTP for file transfers, and SMTP for email.';
    } else if (matchedWordesCode.includes('bandwidth')) {
        botResponse = 'Bandwidth refers to the maximum rate of data transfer across a given path. It is typically measured in bits per second (bps) and determines the speed and capacity of a network connection.';
    } else if (matchedWordesCode.includes('browser')) {
        botResponse = 'A browser is software used to access and view websites on the internet. Common web browsers include Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge.';
    } else if (matchedWordesCode.includes('URL')) {
        botResponse = 'A URL (Uniform Resource Locator) is the address used to access resources on the internet. It specifies the location of a resource, such as a web page, and the protocol used to access it (e.g., http, https).';
    } else if (matchedWordesCode.includes('HTTPS')) {
        botResponse = 'HTTPS (Hypertext Transfer Protocol Secure) is an extension of HTTP that uses encryption to secure data transfer between a web browser and a server. It ensures privacy and data integrity for users.';
    } else if (matchedWordesCode.includes('HTTP')) {
        botResponse = 'HTTP (Hypertext Transfer Protocol) is a protocol used for transmitting hypertext over the internet. It is the foundation of data communication on the web, enabling the transfer of web pages and other resources.';
    }  else if (matchedWordesCode.includes('IP')) {
        botResponse = 'IP (Internet Protocol) is a set of rules governing the format of data sent over the internet or a local network. An IP address is a unique identifier assigned to each device connected to a network.';
    } else if (matchedWordesCode === "html"){
        botResponse = `"HTML" (Hypertext Markup Language), Is the standard markup language used for creating web pages and web applications. It provides the structure and content of a web page by using a system of tags and attributes to define elements such as headings, paragraphs, links, images, and multimedia content. HTML documents are interpreted by web browsers to display the content as formatted web pages. HTML is often used in conjunction with CSS (Cascading Style Sheets) for styling and layout, as well as JavaScript for interactivity and dynamic content.`;
        } else if(matchedWordesCode === "javascript"){
        botResponse = `"JavaScript" - Is a high-level programming language primarily used for developing web applications. It is an essential component of web development alongside HTML and CSS. JavaScript allows developers to add dynamic behavior to web pages, interact with the Document Object Model (DOM) to modify page content, handle user interactions, and communicate with servers to retrieve or send data asynchronously.

JavaScript is a versatile language that can be used both on the client-side (in web browsers) and on the server-side (with environments like Node.js). It supports various programming paradigms, including procedural, functional, and object-oriented programming.

Some key features of JavaScript include:

/ Dynamic Typing: /  Variables in JavaScript can hold values of any data type without explicit declaration.

/ Prototypal Inheritance: /  Objects in JavaScript can inherit properties and methods from other objects through prototype chains.

/ First-Class Functions: / Functions in JavaScript are treated as first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.

/ Closures: /  Functions in JavaScript retain access to the variables in their lexical scope even after the parent function has finished executing.

/ Asynchronous Programming: / JavaScript supports asynchronous programming using callbacks, promises, and async/await syntax to handle tasks that take time to complete, such as fetching data from servers or executing I/O operations.

JavaScript is widely used in web development, but its versatility extends beyond the web, as it is also used in server-side development, mobile app development, game development, and more.`;
        } else if(matchedWordesCode === "css"){
        botResponse = `CSS stands for Cascading Style Sheets. It is a style sheet language used to define the presentation and layout of HTML documents, including colors, fonts, spacing, and other visual aspects. CSS allows developers to separate the structure of a web page (defined with HTML) from its style and presentation, making it easier to maintain and update the appearance of a website across multiple pages.

Key features of CSS include:

/ Selectors: / CSS selectors are used to target HTML elements and apply styles to them. Selectors can target elements based on their tag names, class names, IDs, attributes, and relationships with other elements.

/ Properties and Values: / CSS properties define the visual characteristics of HTML elements, such as color, font size, margin, padding, and border. Each property is assigned a value that specifies how the characteristic should be styled.

/ Cascading: / CSS follows a cascading model, meaning that styles can be inherited from parent elements and overridden by more specific styles defined later in the document or in an external style sheet.

/ Specificity: / CSS specificity determines which styles are applied to an element when conflicting styles are defined. Styles with higher specificity (eg, those targeting IDs or inline styles) take precedence over styles with lower specificity (eg, those targeting tag names or classes).

/ Units and Values: / CSS supports various units and values for specifying measurements, such as pixels (px), percentages (%), ems (em), rems (rem), and viewport units (vw and vh).

/ Box Model: / CSS uses a box model to describe the layout of elements on a web page, including their content, padding, border, and margin. Developers can adjust these properties to control the spacing and alignment of elements.

CSS is an essential part of web development, allowing developers to create visually appealing and responsive websites that adapt to different screen sizes and devices. It is often combined with HTML and JavaScript to create modern and interactive web experiences.`;
        }
    return botResponse;
}

function handleScienceWords(matchedScienceW) {
    let botResponse = "";

    if (matchedScienceW.includes('astronomy')) {
        botResponse = "Astronomy is the study of everything in outer space, like stars, planets, and galaxies.";
    } else if (matchedScienceW.includes('geology')) {
        botResponse = "Geology is the study of the Earth, including rocks, minerals, and how the Earth changes over time.";
    } else if (matchedScienceW.includes('meteorology')) {
        botResponse = "Meteorology is the science of weather and atmosphere, which helps us understand and predict weather patterns.";
    } else if (matchedScienceW.includes('ecology')) {
        botResponse = "Ecology is the study of how living things interact with each other and their environment.";
    } else if (matchedScienceW.includes('botany')) {
        botResponse = "Botany is the scientific study of plants, including their structure, properties, and biochemical processes.";
    } else if (matchedScienceW.includes('zoology')) {
        botResponse = "Zoology is the branch of biology that studies animals and their behavior, physiology, and classification.";
    } else if (matchedScienceW.includes('genetics')) {
        botResponse = "Genetics is the study of genes and heredity, which explains how traits are passed from parents to offspring.";
    } else if (matchedScienceW.includes('microbiology')) {
        botResponse = "Microbiology is the study of tiny living things, such as bacteria, viruses, and fungi, that are too small to see with the naked eye.";
    } else if (matchedScienceW.includes('biochemistry')) {
        botResponse = "Biochemistry is the study of the chemical processes that happen inside living organisms.";
    } else if (matchedScienceW.includes('organic chemistry')) {
        botResponse = "Organic chemistry is the study of carbon-based compounds, which are the foundation of all living things.";
    } else if (matchedScienceW.includes('inorganic chemistry')) {
        botResponse = "Inorganic chemistry is the study of minerals, metals, and other compounds that don't contain carbon.";
    } else if (matchedScienceW.includes('physical chemistry')) {
        botResponse = "Physical chemistry is the branch of chemistry that deals with how matter behaves on a molecular and atomic level and how chemical reactions occur.";
    } else if (matchedScienceW.includes('nuclear physics')) {
        botResponse = "Nuclear physics is the study of the components and behavior of atomic nuclei.";
    } else if (matchedScienceW.includes('quantum physics')) {
        botResponse = "Quantum physics is the branch of physics that studies the smallest particles in the universe and their interactions.";
    } else if (matchedScienceW.includes('particle physics')) {
        botResponse = "Particle physics explores the fundamental particles that make up the universe and how they interact.";
    } else if (matchedScienceW.includes('cosmology')) {
        botResponse = "Cosmology is the study of the origin, evolution, and eventual fate of the universe.";
    } else if (matchedScienceW.includes('planetary science')) {
        botResponse = "Planetary science is the study of planets, moons, and planetary systems, particularly our own Solar System.";
    } else if (matchedScienceW.includes('seismology')) {
        botResponse = "Seismology is the scientific study of earthquakes and the propagation of seismic waves through the Earth.";
    } else if (matchedScienceW.includes('volcanology')) {
        botResponse = "Volcanology is the study of volcanoes, lava, magma, and related geological phenomena.";
    } else if (matchedScienceW.includes('climatology')) {
        botResponse = "Climatology is the study of climate, including the statistics of temperature, humidity, atmospheric pressure, and other meteorological elements over long periods.";
    } else if (matchedScienceW.includes('oceanography')) {
        botResponse = "Oceanography is the study of the physical and biological aspects of the ocean.";
    } else if (matchedScienceW.includes('environmental science')) {
        botResponse = "Environmental science is the study of the environment and how to protect it by understanding natural and human-made processes.";
    } else if (matchedScienceW.includes('ecosystem')) {
        botResponse = "An ecosystem is a community of living organisms and their physical environment, functioning together as a unit.";
    } else if (matchedScienceW.includes('evolution')) {
        botResponse = "Evolution is the process through which species of organisms change over time through changes in their genetic material.";
    } else if (matchedScienceW.includes('natural selection')) {
        botResponse = "Natural selection is the process where organisms that are better adapted to their environment tend to survive and reproduce more successfully.";
    } else if (matchedScienceW.includes('cell biology')) {
        botResponse = "Cell biology is the study of cells, their physiology, structure, and life cycle.";
    } else if (matchedScienceW.includes('molecular biology')) {
        botResponse = "Molecular biology is the study of biological processes at the molecular level, including the interactions between different systems of a cell.";
    } else if (matchedScienceW.includes('neuroscience')) {
        botResponse = "Neuroscience is the study of the nervous system, including the brain and spinal cord.";
    } else if (matchedScienceW.includes('cell')) {
        botResponse = "A cell is the smallest unit of life that can replicate independently, and is often called the building block of life.";
    } else if (matchedScienceW.includes('natural')) {
        botResponse = "Natural sciences are branches of science that study the physical world, its phenomena, and processes.";
    }

    return botResponse;
}

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
        botResponse = "Let's take a closer look:<br><br>A typewriter is a mechanical or electromechanical machine used for typing characters similar to those produced by a printer's movable type. For example, authors used typewriters to compose manuscripts before computers were widely available. These devices are cherished by collectors and typists who enjoy their tactile feedback. Would you like to know more about the history of typewriters?";
    } else if (matchedWordOther === 'shorthand') {
        botResponse = "Let's delve into this:<br><br>Shorthand is a method of rapid writing by using symbols and abbreviations. It's often used for transcription in professions like journalism and court reporting. For instance, Pitman and Gregg are two popular shorthand systems. Are you interested in learning a specific shorthand system?";
    } else if (matchedWordOther === 'book') {
        botResponse = "Here's some information:<br><br>A book is a collection of written or printed pages, bound together and enclosed in a cover. For instance, novels, like 'Pride and Prejudice,' and textbooks, like 'Introduction to Psychology,' serve different purposes. What kind of books do you enjoy reading?";
    } else if (matchedWordOther === 'chair') {
        botResponse = "Let's explore this topic:<br><br>A chair is a piece of furniture designed for sitting, typically having four legs and a backrest. Examples include office chairs, designed for prolonged sitting, and dining chairs, for use at a table. Are you looking for ergonomic advice on chairs?";
    } else if (matchedWordOther === 'table') {
        botResponse = "Let's take a look:<br><br>A table is a piece of furniture with a flat surface supported by legs, used for various activities like dining, working, or displaying items. Examples include dining tables, coffee tables, and desks. What type of table are you interested in?";
    } else if (matchedWordOther === 'lamp') {
        botResponse = "Let's shed some light on this:<br><br>A lamp is a device that produces light, often used to illuminate a room or a specific area. For example, desk lamps are used for focused lighting while working, and floor lamps can brighten an entire room. Are you looking for advice on choosing a specific type of lamp?";
    } else if (matchedWordOther === 'pen') {
        botResponse = "Here's what you need to know:<br><br>A pen is a writing instrument used to apply ink to paper. There are various types of pens, such as ballpoint pens, fountain pens, and gel pens. For example, a ballpoint pen is commonly used for everyday writing, while a fountain pen is often preferred for calligraphy. Do you have a preferred type of pen?";
    } else if (matchedWordOther === 'notebook') {
        botResponse = "Let's discuss this:<br><br>A notebook is a book of blank or ruled pages used for writing notes. For example, students use notebooks for taking class notes, while professionals use them for jotting down ideas or meeting notes. Do you need suggestions for choosing a notebook?";
    } else if (matchedWordOther === 'cup') {
        botResponse = "Here's some insight:<br><br>A cup is a small container used for drinking liquids, typically made of glass, ceramic, or plastic. For example, coffee cups, tea cups, and plastic cups are used for different beverages. Do you have a specific type of cup in mind?";
    } else if (matchedWordOther === 'plate') {
        botResponse = "Let's examine this:<br><br>A plate is a flat dish from which food is eaten or served. Plates come in various sizes and materials, such as dinner plates, dessert plates, and paper plates. For example, dinner plates are larger and used for main courses, while dessert plates are smaller and used for serving sweets. Are you looking for recommendations on plate materials or designs?";
    } else if (matchedWordOther === 'spoon') {
        botResponse = "Let's look at this:<br><br>A spoon is a utensil with a small, shallow bowl at the end of a handle, used for eating, stirring, and serving food. For example, teaspoons are used for stirring tea or coffee, and soup spoons have a larger bowl for eating soups. Do you have a specific type of spoon you need information on?";
    } else if (matchedWordOther === 'fork') {
        botResponse = "Here's something to know:<br><br>A fork is a utensil with a handle and several narrow tines, used for eating and serving food. Examples include dinner forks, which are used for main courses, and salad forks, which are smaller and used for salads. Are you curious about the different types of forks?";
    } else if (matchedWordOther === 'knife') {
        botResponse = "Let's explore this:<br><br>A knife is a tool with a handle and a blade, used for cutting food and other materials. For example, a chef's knife is a versatile kitchen tool for chopping and slicing, while a butter knife has a blunt edge for spreading butter. What kind of knife are you interested in?";
    } else if (matchedWordOther === 'phone') {
        botResponse = "Here's some info:<br><br>A phone, or telephone, is a device used for voice communication over long distances. Examples include landline phones, which are connected to a network via wires, and mobile phones, which use wireless technology. Are you interested in learning about the evolution of phones?";
    } else if (matchedWordOther === 'computer') {
        botResponse = "Let's take a look at this:<br><br>A computer is an electronic device that processes data and performs tasks according to a set of instructions. Examples include desktop computers, which are used at a fixed location, and laptops, which are portable. What specific aspects of computers are you curious about?";
    } else if (matchedWordOther === 'keyboard') {
        botResponse = "Here's what you should know:<br><br>A keyboard is an input device used to type text and perform commands on a computer. For instance, mechanical keyboards have individual switches for each key, while membrane keyboards have a different, quieter mechanism. Do you have a preference for a type of keyboard?";
    } else if (matchedWordOther === 'mouse') {
        botResponse = "Let's discuss this:<br><br>A mouse is a handheld input device used to control a cursor on a computer screen. Examples include wired mice, which connect via a cable, and wireless mice, which use Bluetooth or RF technology. Are you looking for recommendations on choosing a mouse?";
    } else if (matchedWordOther === 'television') {
        botResponse = "Here's some information:<br><br>A television (TV) is an electronic device that receives broadcast signals and displays them as visual and audio content. For example, LED TVs are common for their clear picture quality, while smart TVs have internet connectivity for streaming services. Do you have a favorite type of television content?";
    } else if (matchedWordOther === 'remote') {
        botResponse = "Let's take a closer look:<br><br>A remote control is a device used to operate electronic devices from a distance, usually by sending infrared or radio signals. For instance, TV remotes control channel and volume settings, and universal remotes can operate multiple devices. Are you interested in learning about the latest remote control technologies?";
    } else if (matchedWordOther === 'window') {
        botResponse = "Here's something to know:<br><br>A window is an opening in a wall, door, or roof, fitted with glass or other transparent material, to allow light and air to enter. For example, double-pane windows provide better insulation, while stained glass windows are used for decorative purposes. Are you looking for information on types of windows?";
    } else if (matchedWordOther === 'door') {
        botResponse = "Let's discuss this:<br><br>A door is a movable barrier that allows entry and exit from a space. Examples include front doors, which provide access to a building, and sliding doors, which save space and offer a modern look. Are you interested in specific door materials or designs?";
    } else if (matchedWordOther === 'bed') {
        botResponse = "Here's what you need to know:<br><br>A bed is a piece of furniture for sleeping or resting, typically consisting of a frame, mattress, and bedding. For example, twin beds are suitable for one person, while king-size beds offer ample space for couples. Do you have preferences for a particular bed type?";
    } else if (matchedWordOther === 'pillow') {
        botResponse = "Let's take a look at this:<br><br>A pillow is a cushion used to support the head or body while sleeping or resting. Examples include memory foam pillows, which contour to the shape of your head, and down pillows, which are soft and fluffy. Are you looking for recommendations on pillow types?";
    } else if (matchedWordOther === 'blanket') {
        botResponse = "Here's some insight:<br><br>A blanket is a large piece of fabric used to keep warm, typically used on a bed. For instance, fleece blankets are lightweight and warm, while electric blankets have heating elements for added warmth. Do you have a favorite type of blanket?";
    } else if (matchedWordOther === 'towel') {
        botResponse = "Let's examine this:<br><br>A towel is an absorbent piece of cloth or paper used for drying or wiping. Examples include bath towels, which are large and used after bathing, and hand towels, which are smaller and used for drying hands. Are you interested in the best materials for towels?";
    } else if (matchedWordOther === 'soap') {
        botResponse = "Here's some information:<br><br>Soap is a substance used for cleaning, typically made from natural oils or fats and an alkali. For example, bar soap is solid and used for washing hands and body, while liquid soap is convenient for dispensers. Do you have a preference for a type of soap?";
    } else if (matchedWordOther === 'shampoo') {
        botResponse = "Let's discuss this:<br><br>Shampoo is a liquid or cream used for washing hair. For instance, clarifying shampoo removes buildup, while moisturizing shampoo adds hydration to dry hair. Are you looking for recommendations on a specific type of shampoo?";
    } else if (matchedWordOther === 'toothbrush') {
        botResponse = "Here's what you need to know:<br><br>A toothbrush is a small brush with a long handle used for cleaning teeth. Examples include manual toothbrushes, which require hand motion, and electric toothbrushes, which provide automated brushing. Do you have a preference for a type of toothbrush?";
    } else if (matchedWordOther === 'toothpaste') {
        botResponse = "Let's take a look at this:<br><br>Toothpaste is a paste or gel used with a toothbrush to clean and maintain the health of teeth. For example, fluoride toothpaste helps prevent cavities, while whitening toothpaste aims to reduce stains. Are you looking for a specific type of toothpaste?";
    } else if (matchedWordOther === 'mirror') {
        botResponse = "Here's some insight:<br><br>A mirror is a reflective surface, typically made of glass coated with a metal amalgam, that reflects a clear image. For example, bathroom mirrors are used for personal grooming, while decorative mirrors enhance home decor. Are you interested in types of mirrors?";
    } else if (matchedWordOther === 'clock') {
        botResponse = "Let's examine this:<br><br>A clock is a device used to measure and indicate time. Examples include analog clocks, with hour and minute hands, and digital clocks, which display time numerically. Are you looking for recommendations on a specific type of clock?";
    } else if (matchedWordOther === 'calendar') {
        botResponse = "Here's some information:<br><br>A calendar is a system for organizing and managing days, typically arranged into weeks, months, and years. For instance, wall calendars are hung for easy viewing, and digital calendars can be accessed on electronic devices. Do you use a specific type of calendar for planning?";
    } else if (matchedWordOther === 'bag') {
        botResponse = "Let's discuss this:<br><br>A bag is a container made of flexible material, used for carrying items. Examples include backpacks, which are worn on the back, and tote bags, which are handheld. Are you interested in learning about different types of bags?";
    } else if (matchedWordOther === 'shoes') {
        botResponse = "Here's what you need to know:<br><br>Shoes are footwear designed to protect and comfort the feet while walking. For instance, running shoes are designed for athletic activities, while dress shoes are worn for formal occasions. Do you have a preference for a specific type of shoe?";
    } else if (matchedWordOther === 'jacket') {
        botResponse = "Let's take a look at this:<br><br>A jacket is a garment for the upper body, typically having a front opening, collar, and sleeves. Examples include leather jackets, known for their durability and style, and rain jackets, designed to keep you dry. Are you looking for advice on choosing a jacket?";
    } else if (matchedWordOther === 'hat') {
        botResponse = "Here's some insight:<br><br>A hat is a head covering, often worn for protection, fashion, or ceremonial reasons. For example, baseball caps are casual and sporty, while fedora hats add a touch of elegance. Do you have a favorite type of hat?";
    } else if (matchedWordOther === 'glasses') {
        botResponse = "Let's examine this:<br><br>Glasses are optical devices consisting of lenses mounted in a frame, used to correct vision or protect eyes. For instance, prescription glasses correct vision impairments, while sunglasses protect eyes from UV rays. Are you looking for information on types of glasses?";
    } else if (matchedWordOther === 'wallet') {
        botResponse = "Here's some information:<br><br>A wallet is a small, flat case used to carry personal items such as cash, credit cards, and identification documents. Examples include bifold wallets, which fold in half, and money clip wallets, which hold fewer items and are more compact. Are you interested in learning about different types of wallets?";
    } else if (matchedWordOther === 'keys') {
        botResponse = "Let's discuss this:<br><br>Keys are small metal objects used to open locks. For instance, house keys are used for residential doors, and car keys are used to start vehicles. Are you curious about key management or security solutions?";
    } else if (matchedWordOther === 'bicycle') {
        botResponse = "Here's what you need to know:<br><br>A bicycle is a human-powered vehicle with two wheels, pedals, and a handlebar for steering. Examples include road bikes, designed for speed on paved surfaces, and mountain bikes, built for off-road cycling. Do you have a preferred type of bicycle?";
    } else if (matchedWordOther === 'car') {
        botResponse = "Let's take a look at this:<br><br>A car is a motor vehicle with four wheels, designed for transporting passengers. For example, sedans are common family cars, while SUVs offer more space and are suitable for various terrains. Are you looking for information on a specific type of car?";
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
    } else if (greeting === 'goodbye') {
        botResponse = 'Goodbye! Have a great day!';
    } else  if (greeting === 'thanks') {
        botResponse = "No problem! Is there anything else I can help you with?";
    } 
    return botResponse;
}
