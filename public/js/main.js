//logica para traducir la pagina
 // Textos en diferentes idiomas
        const translations = {
            es: {
                logoText: "Coursehub",
                courses: "Cursos",
                allCourses: "Todos los cursos",
                exactSciences: "Ciencias Exactas",
                physicsMath: "Ciencias Fisicas y Matematicas",
                healthSciences: "Ciencias biologicas y de la salud",
                socialSciences: "Ciencias sociales",
                humanitiesArts: "Humanidades y Artes",
                aboutUs: "Nosotros",
                whoWeAre: "Quiénes somos",
                missionVision: "Misión/Visión",
                contactUs: "Contactanos",
                login: "Iniciar sesión",
                heroTitle: "Coursehub",
                heroSubtitle: "Pensando en tu futuro",
                takeExam: "Presentar Examen",
                ourCourses: "Nuestros cursos",
                mathTitle: "Matematicas",
                mathDesc: "Sientete comodo y a gusto en nuestros cursos matematicos",
                artsTitle: "Artes",
                artsDesc: "Sientete libre y expresate en nuestros cursos de artes",
                coursesTitle: "Mas de 50 cursos gratuitos",
                coursesDesc: "Estudia y especializate en uno de nuestros mas de 50 cursos gratuitos",
                watchClass: "Mira una de nuestras clases muestra!",
                testimonial: "\"No tuve la oportunidad de entrar este año a la universidad pero gracias a Coursehub, no me quedo atras\" - Anonimo",
                newUsers: "Nuevos usuario",
                newUsersDesc1: "Mas de 30 usuarios nuevos cada dia",
                newUsersDesc2: "Cada dia llegamos a mas gente y les ayudamos a cumplir sus metas con nuestros cursos gratuitos.",
                moreOpportunities: "Mas oportunidades",
                moreOpportunitiesDesc: "Estudia mas y mejora todas tus oportunidades",
                supportUs: "Apoyanos",
                supportUsDesc: "Dale a mas gente la oportunidad de alcanzar sus metas",
                donate: "Hacer una donación",
                whoWeAreTitle: "¿Quiénes Somos?",
                whoWeAreDesc1: "Coursehub nos importa tu futuro",
                whoWeAreDesc2: "Apoyamos la iniciativa de la educacion gratuita otorgando mas de 50 cursos totalmente gratuitos y con validación universitaria",
                coursesAvailable: "Cursos disponibles",
                expertInstructors: "Instructores expertos",
                knowledgeAreas: "Áreas de conocimiento",
                visionTitle: "Visión",
                visionDesc: "Ser la plataforma líder en educación digital, inspirando a millones de personas a alcanzar su máximo potencial a través de experiencias de aprendizaje innovadoras, inclusivas y accesibles para todos.",
                missionTitle: "Misión",
                missionDesc: "Democratizar el acceso a la educación de calidad, brindando herramientas, recursos y acompañamiento para que cada persona pueda aprender, crecer y transformar su vida y su entorno.",
                contactTitle: "Contáctanos",
                address: "Dirección",
                phone: "Teléfono",
                email: "Email",
                schedule: "Horario",
                name: "Nombre",
                subject: "Asunto",
                message: "Mensaje",
                sendMessage: "Enviar Mensaje",
                virtualAssistant: "Asistente Virtual",
                assistantMessage: "¡Hola! Soy el asistente virtual de Coursehub. ¿En qué puedo ayudarte hoy?",
                writeMessage: "Escribe tu mensaje...",
                loginTitle: "Iniciar Sesión",
                emailPlaceholder: "Correo Electrónico",
                password: "Contraseña",
                access: "Acceder",
                noAccount: "¿No tienes una cuenta?",
                register: "Regístrate",
                registerTitle: "Registro",
                fullName: "Nombre completo",
                age: "Edad",
                gender: "Género",
                selectOption: "Selecciona",
                male: "Masculino",
                female: "Femenino",
                other: "Otro",
                preferNotSay: "Prefiero no decirlo",
                state: "Estado",
                phoneNumber: "Número de teléfono",
                registerWith: "O regístrate con",
                alreadyAccount: "¿Ya tienes cuenta?",
                quickLinks: "Enlaces Rápidos",
                home: "Inicio",
                solutions: "Soluciones",
                about: "Nosotros",
                contact: "Contacto",
                sponsors: "Patrocinadores",
                information: "Información",
                newsletterDesc1: "¿Te interesa recibir ofertas o recibir noticias de nuestro programa?",
                newsletterDesc2: "Ingresa tu correo para mantenerte informado",
                yourEmail: "Tu email",
                subscribe: "Suscribirse",
                copyright: "&copy; 2025 Coursehub. Todos los derechos reservados."
            },
            en: {
                logoText: "Coursehub",
                courses: "Courses",
                allCourses: "All courses",
                exactSciences: "Exact Sciences",
                physicsMath: "Physics and Mathematics",
                healthSciences: "Health Sciences",
                socialSciences: "Social Sciences",
                humanitiesArts: "Humanities and Arts",
                aboutUs: "About Us",
                whoWeAre: "Who we are",
                missionVision: "Mission/Vision",
                contactUs: "Contact Us",
                login: "Login",
                heroTitle: "Coursehub",
                heroSubtitle: "Thinking about your future",
                takeExam: "Take Exam",
                ourCourses: "Our courses",
                mathTitle: "Mathematics",
                mathDesc: "Feel comfortable in our math courses",
                artsTitle: "Arts",
                artsDesc: "Express yourself freely in our art courses",
                coursesTitle: "More than 50 free courses",
                coursesDesc: "Study and specialize in one of our more than 50 free courses",
                watchClass: "Watch one of our sample classes!",
                testimonial: "\"I didn't have the opportunity to enter university this year but thanks to Coursehub, I don't fall behind\" - Anonymous",
                newUsers: "New users",
                newUsersDesc1: "More than 30 new users every day",
                newUsersDesc2: "Every day we reach more people and help them achieve their goals with our free courses.",
                moreOpportunities: "More opportunities",
                moreOpportunitiesDesc: "Study more and improve all your opportunities",
                supportUs: "Support Us",
                supportUsDesc: "Give more people the opportunity to achieve their goals",
                donate: "Make a donation",
                whoWeAreTitle: "Who We Are?",
                whoWeAreDesc1: "Coursehub cares about your future",
                whoWeAreDesc2: "We support the initiative of free education by offering more than 50 completely free courses with university validation",
                coursesAvailable: "Courses available",
                expertInstructors: "Expert instructors",
                knowledgeAreas: "Knowledge areas",
                visionTitle: "Vision",
                visionDesc: "To be the leading digital education platform, inspiring millions of people to reach their full potential through innovative, inclusive and accessible learning experiences for all.",
                missionTitle: "Mission",
                missionDesc: "Democratize access to quality education, providing tools, resources and support so that each person can learn, grow and transform their life and their environment.",
                contactTitle: "Contact Us",
                address: "Address",
                phone: "Phone",
                email: "Email",
                schedule: "Schedule",
                name: "Name",
                subject: "Subject",
                message: "Message",
                sendMessage: "Send Message",
                virtualAssistant: "Virtual Assistant",
                assistantMessage: "Hello! I'm Coursehub's virtual assistant. How can I help you today?",
                writeMessage: "Write your message...",
                loginTitle: "Login",
                emailPlaceholder: "Email",
                password: "Password",
                access: "Access",
                noAccount: "Don't have an account?",
                register: "Register",
                registerTitle: "Register",
                fullName: "Full name",
                age: "Age",
                gender: "Gender",
                selectOption: "Select",
                male: "Male",
                female: "Female",
                other: "Other",
                preferNotSay: "Prefer not to say",
                state: "State",
                phoneNumber: "Phone number",
                registerWith: "Or register with",
                alreadyAccount: "Already have an account?",
                quickLinks: "Quick Links",
                home: "Home",
                solutions: "Solutions",
                about: "About",
                contact: "Contact",
                sponsors: "Sponsors",
                information: "Information",
                newsletterDesc1: "Are you interested in receiving offers or news about our program?",
                newsletterDesc2: "Enter your email to stay informed",
                yourEmail: "Your email",
                subscribe: "Subscribe",
                copyright: "&copy; 2025 Coursehub. All rights reserved."
            }
        };

        // Función para cambiar el idioma
           function changeLanguage(lang) {
            const elements = document.querySelectorAll('[data-translate]');
            elements.forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[lang][key]) {
                    // Manejo especial para el enlace de registro
                    if (element.id === 'showRegister') {
                        return; // Lo manejamos aparte
                    }
                    element.textContent = translations[lang][key];
                }
            });
             // Manejo especial para el texto del enlace de registro
            const noAccountText = translations[lang]['noAccount'];
            const registerText = translations[lang]['register'];
            const modalFooter = document.querySelector('#loginModal .modal-footer p');
            modalFooter.innerHTML = `${noAccountText} <a href="#" id="showRegister">${registerText}</a>`;
            
            // Re-asignar el event listener al enlace de registro
            document.getElementById('showRegister').addEventListener('click', function(e) {
                e.preventDefault();
                loginModal.classList.remove('show');
                registerModal.classList.add('show');
            });

            // Actualizar placeholders
            const placeholders = document.querySelectorAll('[data-placeholder]');
            placeholders.forEach(element => {
                const key = element.getAttribute('data-placeholder');
                if (translations[lang][key]) {
                    element.setAttribute('placeholder', translations[lang][key]);
                }
            });

            // Actualizar valores de opciones
            const options = document.querySelectorAll('[data-option]');
            options.forEach(element => {
                const key = element.getAttribute('data-option');
                if (translations[lang][key]) {
                    element.textContent = translations[lang][key];
                }
            });

            // Actualizar atributos title y alt
            const titles = document.querySelectorAll('[data-title]');
            titles.forEach(element => {
                const key = element.getAttribute('data-title');
                if (translations[lang][key]) {
                    element.setAttribute('title', translations[lang][key]);
                }
            });

            const alts = document.querySelectorAll('[data-alt]');
            alts.forEach(element => {
                const key = element.getAttribute('data-alt');
                if (translations[lang][key]) {
                    element.setAttribute('alt', translations[lang][key]);
                }
            });

            // Actualizar el chatbot
            const chatbotMessage = document.querySelector('.bot-message');
            if (chatbotMessage) {
                chatbotMessage.textContent = translations[lang]['assistantMessage'];
            }

            const userInput = document.getElementById('userInput');
            if (userInput) {
                userInput.setAttribute('placeholder', translations[lang]['writeMessage']);
            }
        }

        // Selector de idioma
        const languageSelector = document.getElementById('languageSelector');
        languageSelector.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });

        // Accesibilidad - Lectura de texto
        const readPageBtn = document.getElementById('readPageBtn');
        const stopReadingBtn = document.getElementById('stopReadingBtn');
        let speechSynthesis = window.speechSynthesis;
        let utterance = null;

        function readText(text) {
            if (speechSynthesis.speaking) {
                speechSynthesis.cancel();
            }
            
            utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = languageSelector.value === 'es' ? 'es-ES' : 'en-US';
            utterance.rate = 0.9;
            
            speechSynthesis.speak(utterance);
            
            utterance.onend = function() {
                readPageBtn.style.display = 'flex';
                stopReadingBtn.style.display = 'none';
            };
        }

        function readPageContent() {
            const mainContent = document.querySelector('main');
            const textToRead = mainContent.innerText.replace(/\s+/g, ' ').trim();
            
            readPageBtn.style.display = 'none';
            stopReadingBtn.style.display = 'flex';
            
            readText(textToRead);
        }

        function stopReading() {
            if (speechSynthesis.speaking) {
                speechSynthesis.cancel();
            }
            readPageBtn.style.display = 'flex';
            stopReadingBtn.style.display = 'none';
        }

        readPageBtn.addEventListener('click', readPageContent);
        stopReadingBtn.addEventListener('click', stopReading);

        // menu movil
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const nav = document.getElementById('nav');

        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileMenuBtn.innerHTML = nav.classList.contains('active') ?
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Efecto de scroll en el header
        const header = document.getElementById('header');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Slider
        const slider = document.getElementById('slider');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const sliderDots = document.getElementById('sliderDots');
        const slides = document.querySelectorAll('.slide');

        let currentSlide = 0;
        const slideCount = slides.length;
        let slideInterval;

        // Crear puntos
        function createDots() {
            sliderDots.innerHTML = '';
            slides.forEach((slide, index) => {
                const dot = document.createElement('span');
                dot.addEventListener('click', () => goToSlide(index));
                sliderDots.appendChild(dot);
            });
            updateDots();
        }

        function updateDots() {
            const dots = document.querySelectorAll('.slider-dots span');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        function startAutoSlide() {
            slideInterval = setInterval(nextSlide, 5000);
        }

        function stopAutoSlide() {
            clearInterval(slideInterval);
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slideCount;
            updateSlider();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slideCount) % slideCount;
            updateSlider();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateSlider();
            resetInterval();
        }

        function updateSlider() {
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
            updateDots();
        }

        function resetInterval() {
            stopAutoSlide();
            startAutoSlide();
        }

        // Event listeners para los botones de navegación y el mouse
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });

        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });

        slider.addEventListener('mouseenter', stopAutoSlide);
        slider.addEventListener('mouseleave', startAutoSlide);

        // Iniciar el slider
        createDots();
        startAutoSlide();

        // Chatbot
        const chatbotBtn = document.getElementById('chatbotBtn');
        const chatbotWindow = document.getElementById('chatbotWindow');
        const chatbotClose = document.getElementById('chatbotClose');

        chatbotBtn.addEventListener('click', () => {
            chatbotWindow.style.display = 'flex';
        });

        chatbotClose.addEventListener('click', () => {
            chatbotWindow.style.display = 'none';
        });

            // Preguntas y respuestas predeterminadas para el chatbot (FAQ)
            const faqPairs = [
                {
                    q: '¿De qué trata el examen?',
                    a: 'El botón de presentar examen te mandará a una de nuestras páginas en la cual una IA te hará preguntas para poderte ayudar a elegir uno de los cursos respecto a tus respuestas.'
                },
                {
                    q: '¿Qué servicios ofrecen aquí?',
                    a: 'Evaluación vocacional gratuita, cursos de aprendizaje de distintas áreas y certificaciones válidas por universidades.'
                },
                {
                    q: '¿Es gratis o tiene costo?',
                    a: 'Principalmente nuestros cursos y nuestro examen de orientación están disponibles para todo público sin costo alguno, pero cursos más avanzados tienen cierto costo e incluyen certificación.'
                }
            ];

            // Agregar botones de preguntas predeterminadas al chatbot
            function renderFAQButtons() {
                const faqDiv = document.createElement('div');
                faqDiv.style.display = 'flex';
                faqDiv.style.flexDirection = 'column';
                faqDiv.style.gap = '8px';
                faqDiv.style.marginBottom = '10px';
                faqDiv.id = 'faq-buttons';
                faqPairs.forEach((pair) => {
                    const btn = document.createElement('button');
                    btn.textContent = pair.q;
                    btn.className = 'btn';
                    btn.style.background = '#3498db';
                    btn.style.color = 'white';
                    btn.style.fontSize = '0.95em';
                    btn.style.borderRadius = '20px';
                    btn.style.padding = '7px 16px';
                    btn.style.border = 'none';
                    btn.style.cursor = 'pointer';
                    btn.style.transition = 'background 0.2s';
                    btn.onmouseover = () => btn.style.background = '#217dbb';
                    btn.onmouseout = () => btn.style.background = '#3498db';
                    btn.onclick = () => {
                        addMessage(pair.q, true);
                        setTimeout(() => addMessage(pair.a, false), 600);
                    };
                    faqDiv.appendChild(btn);
                });
                chatbotMessages.insertBefore(faqDiv, chatbotMessages.firstChild.nextSibling);
            }

            // Llamar a la función al abrir el chatbot
            chatbotBtn.addEventListener('click', () => {
                chatbotWindow.style.display = 'flex';
                // Evitar duplicados
                if (!document.getElementById('faq-buttons')) {
                    renderFAQButtons();
                }
            });

        //  Chatbot
        const userInput = document.getElementById('userInput');
        const sendMessage = document.getElementById('sendMessage');
        const chatbotMessages = document.getElementById('chatbotMessages');

        function addMessage(message, isUser) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message');
            messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
            messageDiv.textContent = message;
            chatbotMessages.appendChild(messageDiv);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }

        function handleUserMessage() {
            const message = userInput.value.trim();
            if (message) {
                addMessage(message, true);
                userInput.value = '';

                // Simple bot
                setTimeout(() => {
                    let botResponse;
                    const lang = languageSelector.value;
                    
                    if (message.toLowerCase().includes('hola') || message.toLowerCase().includes('buenos días') || message.toLowerCase().includes('buenas tardes') || 
                        message.toLowerCase().includes('hello') || message.toLowerCase().includes('good morning') || message.toLowerCase().includes('good afternoon')) {
                        botResponse = lang === 'es' ? 
                            "¡Hola! ¿En qué puedo ayudarte hoy? Puedes preguntarme sobre nuestros cursos o cómo registrarte." : 
                            "Hello! How can I help you today? You can ask me about our courses or how to register.";
                    } else if (message.toLowerCase().includes('precio') || message.toLowerCase().includes('coste') || message.toLowerCase().includes('costos') || 
                               message.toLowerCase().includes('price') || message.toLowerCase().includes('cost')) {
                        botResponse = lang === 'es' ? 
                            "Todos nuestros cursos son completamente gratuitos. No hay costos asociados." : 
                            "All our courses are completely free. There are no associated costs.";
                    } else if (message.toLowerCase().includes('contacto') || message.toLowerCase().includes('hablar') || message.toLowerCase().includes('asesor') || 
                               message.toLowerCase().includes('contact') || message.toLowerCase().includes('talk') || message.toLowerCase().includes('advisor')) {
                        botResponse = lang === 'es' ? 
                            "Puedes contactar a nuestro equipo al (+52)2225231294 o enviar un correo a isackchazari@gmail.com. También puedes completar el formulario de contacto en nuestra página web." : 
                            "You can contact our team at (+52)2225231294 or send an email to isackchazari@gmail.com. You can also complete the contact form on our website.";
                    } else if (message.toLowerCase().includes('gracias') || message.toLowerCase().includes('agradecido') || 
                               message.toLowerCase().includes('thank you') || message.toLowerCase().includes('thanks')) {
                        botResponse = lang === 'es' ? 
                            "¡De nada! Estoy aquí para ayudar. ¿Hay algo más en lo que pueda asistirte?" : 
                            "You're welcome! I'm here to help. Is there anything else I can assist you with?";
                    } else {
                        botResponse = lang === 'es' ? 
                            "Gracias por tu mensaje. Un miembro de nuestro equipo te responderá pronto. Mientras tanto, ¿hay algo más en lo que pueda ayudarte?" : 
                            "Thank you for your message. A member of our team will respond to you soon. In the meantime, is there anything else I can help you with?";
                    }
                    addMessage(botResponse, false);
                }, 1000);
            }
        }

        sendMessage.addEventListener('click', handleUserMessage);

        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleUserMessage();
            }
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    if (nav.classList.contains('active')) {
                        nav.classList.remove('active');
                        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            });
        });

        // Form submission
        const contactForm = document.getElementById('contactForm');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // mensaje d q el formulario se envio
            const lang = languageSelector.value;
            const message = lang === 'es' ? 
                'Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.' : 
                'Thank you for your message. We will contact you soon.';
            alert(message);
            contactForm.reset();
        });

        // Modal de Login y Registro
        const loginBtn = document.getElementById('loginBtn');
        const loginModal = document.getElementById('loginModal');
        const closeModalBtn = document.getElementById('closeModalBtn');
        const showRegister = document.getElementById('showRegister');
        const registerModal = document.getElementById('registerModal');
        const closeRegisterBtn = document.getElementById('closeRegisterBtn');
        const showLogin = document.getElementById('showLogin');

        // Mostrar login
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.classList.add('show');
        });

        // Cerrar login
        closeModalBtn.addEventListener('click', () => {
            loginModal.classList.remove('show');
        });

        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.classList.remove('show');
            }
        });

        // Mostrar registro
        showRegister.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.classList.remove('show');
            registerModal.classList.add('show');
        });

        // Cerrar registro
        closeRegisterBtn.addEventListener('click', () => {
            registerModal.classList.remove('show');
        });

        registerModal.addEventListener('click', (e) => {
            if (e.target === registerModal) {
                registerModal.classList.remove('show');
            }
        });

        // Volver a login desde registro
        showLogin.addEventListener('click', (e) => {
            e.preventDefault();
            registerModal.classList.remove('show');
            loginModal.classList.add('show');
        });

        // Registro (solo muestra alerta, no envía datos)
        const registerForm = document.getElementById('registerForm');
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const acceptTerms = document.getElementById('acceptTerms');
            if (!acceptTerms.checked) {
                alert('Debes aceptar los términos y condiciones para registrarte.');
                return;
            }
            const lang = languageSelector.value;
            const message = lang === 'es' ? 
                '¡Registro exitoso! Ahora puedes iniciar sesión.' : 
                'Successful registration! You can now log in.';
            alert(message);
            registerModal.classList.remove('show');
        });

        // Añadir atributos data-translate a los elementos que necesitan traducción
        document.addEventListener('DOMContentLoaded', function() {
            // Logo
            document.querySelector('.logo-text').setAttribute('data-translate', 'logoText');
            
            // Menú
            document.querySelector('.nav-text').setAttribute('data-translate', 'courses');
            document.querySelectorAll('.dropdown-content a')[0].setAttribute('data-translate', 'allCourses');
            document.querySelectorAll('.dropdown-content a')[1].setAttribute('data-translate', 'exactSciences');
            document.querySelectorAll('.dropdown-content a')[2].setAttribute('data-translate', 'physicsMath');
            document.querySelectorAll('.dropdown-content a')[3].setAttribute('data-translate', 'healthSciences');
            document.querySelectorAll('.dropdown-content a')[4].setAttribute('data-translate', 'socialSciences');
            document.querySelectorAll('.dropdown-content a')[5].setAttribute('data-translate', 'humanitiesArts');
            document.querySelectorAll('.nav-text')[1].setAttribute('data-translate', 'aboutUs');
            document.querySelectorAll('.dropdown-content a')[6].setAttribute('data-translate', 'whoWeAre');
            document.querySelectorAll('.dropdown-content a')[7].setAttribute('data-translate', 'missionVision');
            document.querySelectorAll('.dropdown-content a')[8].setAttribute('data-translate', 'contactUs');
            document.getElementById('loginBtn').setAttribute('data-title', 'login');
            
            // Hero section
            document.querySelector('.hero-title').setAttribute('data-translate', 'heroTitle');
            document.querySelector('.hero-subtitle').setAttribute('data-translate', 'heroSubtitle');
            document.querySelector('.btn').setAttribute('data-translate', 'takeExam');
            
            // Slider section
            document.querySelector('.section-title h2').setAttribute('data-translate', 'ourCourses');
            document.querySelectorAll('.slide-content h3')[0].setAttribute('data-translate', 'mathTitle');
            document.querySelectorAll('.slide-content p')[0].setAttribute('data-translate', 'mathDesc');
            document.querySelectorAll('.slide-content h3')[1].setAttribute('data-translate', 'artsTitle');
            document.querySelectorAll('.slide-content p')[1].setAttribute('data-translate', 'artsDesc');
            document.querySelectorAll('.slide-content h3')[2].setAttribute('data-translate', 'coursesTitle');
            document.querySelectorAll('.slide-content p')[2].setAttribute('data-translate', 'coursesDesc');
            
            // Video section
            document.querySelector('.video-section h2').setAttribute('data-translate', 'watchClass');
            
            // Features section
            document.querySelector('.section-title h3').setAttribute('data-translate', 'testimonial');
            document.querySelectorAll('.feature-content h3')[0].setAttribute('data-translate', 'newUsers');
            document.querySelectorAll('.feature-content p')[0].setAttribute('data-translate', 'newUsersDesc1');
            document.querySelectorAll('.feature-content p')[1].setAttribute('data-translate', 'newUsersDesc2');
            document.querySelectorAll('.feature-content h3')[1].setAttribute('data-translate', 'moreOpportunities');
            document.querySelectorAll('.feature-content p')[2].setAttribute('data-translate', 'moreOpportunitiesDesc');
            document.querySelectorAll('.feature-content h3')[2].setAttribute('data-translate', 'supportUs');
            document.querySelectorAll('.feature-content p')[3].setAttribute('data-translate', 'supportUsDesc');
            document.querySelectorAll('.btn')[1].setAttribute('data-translate', 'donate');
            
            // About section
            document.querySelector('.about-content h2').setAttribute('data-translate', 'whoWeAreTitle');
            document.querySelectorAll('.about-content p')[0].setAttribute('data-translate', 'whoWeAreDesc1');
            document.querySelectorAll('.about-content p')[1].setAttribute('data-translate', 'whoWeAreDesc2');
            document.querySelectorAll('.stat-text')[0].setAttribute('data-translate', 'coursesAvailable');
            document.querySelectorAll('.stat-text')[1].setAttribute('data-translate', 'expertInstructors');
            document.querySelectorAll('.stat-text')[2].setAttribute('data-translate', 'knowledgeAreas');
            
            // Vision section
            document.querySelectorAll('.vm-content h2')[0].setAttribute('data-translate', 'visionTitle');
            document.querySelectorAll('.vm-content p')[0].setAttribute('data-translate', 'visionDesc');
            
            // Mission section
            document.querySelectorAll('.vm-content h2')[1].setAttribute('data-translate', 'missionTitle');
            document.querySelectorAll('.vm-content p')[1].setAttribute('data-translate', 'missionDesc');
            
            // Contact section
            document.querySelector('.contact .section-title h2').setAttribute('data-translate', 'contactTitle');
            document.querySelectorAll('.contact-text h3')[0].setAttribute('data-translate', 'address');
            document.querySelectorAll('.contact-text h3')[1].setAttribute('data-translate', 'phone');
            document.querySelectorAll('.contact-text h3')[2].setAttribute('data-translate', 'email');
            document.querySelectorAll('.contact-text h3')[3].setAttribute('data-translate', 'schedule');
            document.querySelector('#name').setAttribute('data-placeholder', 'name');
            document.querySelector('#email').setAttribute('data-placeholder', 'emailPlaceholder');
            document.querySelector('#subject').setAttribute('data-placeholder', 'subject');
            document.querySelector('#message').setAttribute('data-placeholder', 'message');
            document.querySelector('.contact-form .btn').setAttribute('data-translate', 'sendMessage');
            
            // Login modal
            document.querySelector('#loginModal .modal-header h2').setAttribute('data-translate', 'loginTitle');
            document.querySelector('#loginEmail').setAttribute('data-placeholder', 'emailPlaceholder');
            document.querySelector('#loginPassword').setAttribute('data-placeholder', 'password');
            document.querySelector('#loginModal .btn').setAttribute('data-translate', 'access');
            document.querySelector('#loginModal .modal-footer p').setAttribute('data-translate', 'noAccount');
            document.querySelector('#showRegister').setAttribute('data-translate', 'register');
            
            // Register modal
            document.querySelector('#registerModal .modal-header h2').setAttribute('data-translate', 'registerTitle');
            document.querySelector('#regName').setAttribute('data-placeholder', 'fullName');
            document.querySelector('#regEmail').setAttribute('data-placeholder', 'emailPlaceholder');
            document.querySelector('#regAge').setAttribute('data-placeholder', 'age');
            document.querySelector('#regGender').setAttribute('data-placeholder', 'gender');
            document.querySelector('#regGender option[value=""]').setAttribute('data-option', 'selectOption');
            document.querySelector('#regGender option[value="Masculino"]').setAttribute('data-option', 'male');
            document.querySelector('#regGender option[value="Femenino"]').setAttribute('data-option', 'female');
            document.querySelector('#regGender option[value="Otro"]').setAttribute('data-option', 'other');
            document.querySelector('#regGender option[value="Prefiero no decirlo"]').setAttribute('data-option', 'preferNotSay');
            document.querySelector('#regState').setAttribute('data-placeholder', 'state');
            document.querySelector('#regPhone').setAttribute('data-placeholder', 'phoneNumber');
            document.querySelector('#registerModal .btn').setAttribute('data-translate', 'register');
            document.querySelector('#registerModal .modal-footer p').setAttribute('data-translate', 'alreadyAccount');
            document.querySelector('#showLogin').setAttribute('data-translate', 'login');
            
            // Footer
            document.querySelectorAll('.footer-col h3')[1].setAttribute('data-translate', 'quickLinks');
            document.querySelectorAll('.footer-links a')[0].setAttribute('data-translate', 'home');
            document.querySelectorAll('.footer-links a')[1].setAttribute('data-translate', 'solutions');
            document.querySelectorAll('.footer-links a')[2].setAttribute('data-translate', 'about');
            document.querySelectorAll('.footer-links a')[3].setAttribute('data-translate', 'contact');
            document.querySelectorAll('.footer-col h3')[2].setAttribute('data-translate', 'sponsors');
            document.querySelectorAll('.footer-col h3')[3].setAttribute('data-translate', 'information');
            document.querySelectorAll('.footer-col p')[2].setAttribute('data-translate', 'newsletterDesc1');
            document.querySelectorAll('.footer-col p')[3].setAttribute('data-translate', 'newsletterDesc2');
            document.querySelector('.newsletter-form input').setAttribute('data-placeholder', 'yourEmail');
            document.querySelector('.newsletter-form .btn').setAttribute('data-translate', 'subscribe');
            document.querySelector('.footer-bottom p').setAttribute('data-translate', 'copyright');
                 // Inicializar el enlace de registro
            const showRegister = document.getElementById('showRegister');
            if (showRegister) {
                showRegister.addEventListener('click', (e) => {
                    e.preventDefault();
                    loginModal.classList.remove('show');
                    registerModal.classList.add('show');
                });
            }

            // Establecer el idioma inicial
            changeLanguage('es');
        });