(function($) {
    var colors = ["#583119"];
    var username = '';
    var myColor;
    var all_questions = [{
        question_string: "Ela Öğretmen tarih dersinde, öğrencilerine anıt ve taşlardaki yazıların okunmasında tarih biliminin yararlandığı alanı sormuştur.\nÖğrencilerin aşağıdakilerden hangisini cevap olarak vermesi beklenir?",
        choices: {
            correct: "Epigrafi",
            wrong: ["Etnografya", "Heraldik", "Antropoloji", "Nümizmatik"]
        }
    }, {
        question_string: "Çin kaynaklarına göre Hunlarda Türk çocukları küçük yaştan itibaren koyunların üzerine binerek binicilik talimi yaparlar, biraz büyüyünce eline ok ve yay alarak kuş ve fareleri avlarlardı. Daha sonra da tilki ve tavşanları avlarlar, bu şekilde çok iyi bir atlı ve okçu olarak yetişirlerdi.\nBuna göre Hunlarla ilgili olarak;\nI. temel geçim kaynaklarının avcılık olduğu,\nII. küçük yaşlardan itibaren savaş aletleri kullandıkları,\nIII. yaşam biçimlerinin askerî özelliklerini geliştirdiği\nbilgilerinden hangilerine ulaşılabilir?",
        choices: {
            correct: "II ve III",
            wrong: ["Yalnız I", "Yalnız II", "Yalnız III", "I ve II"]
        }
    }, {
        question_string: "Abbasiler, Emevilerin aksine Türklere ve Arap olmayan Müslümanlara karşı iyi davrandı. Bu sayede Abbasiler Dönemi’nde Türklerin İslamiyet’e geçişi hızlandı. Özellikle Mutasım Dönemi’nde Türkleri önemli devlet makamlarına ve ordu komutanlıklarına getirdiler. Ayrıca Bizans sınırına yakın kurdukları şehirlere Türkleri yerleştirerek ülkelerini Bizans saldırılarına karşı güvence altına aldılar.\nBuna göre Abbasi Devleti ile ilgili olarak aşağıdakilerden hangisine ulaşılamaz? ",
        choices: {
            correct: "Bizans topraklarının büyük kısmını fethettiklerine",
            wrong: ["Türklerin askerî yeteneklerinden yararlandıklarına", "İdari hizmetlerde farklı unsurlardan faydalandıklarına", "Arap milliyetçiliği yapmadıklarına", "Bizans ile sınırında anlaşmazlıklar yaşandığına"]
        }
    }, {
        question_string: "XIII. yüzyılda Moğol istilasından kaçıp Alaeddin Keykubad’a sığınan Necmeddin Razi; “Müslümanlar emniyet, asayiş ve rahatı Selçuklu hanedanının mübarek çetri gölgesinde buldular. Bu dindar padişahlar zamanında yapılan medreseler, camiler, köprüler ve diğer hayır müesseseleri hiçbir devirde yapılmamış; âlimlere ve halka gösterilen şefkat ve merhamet, girişilen gazalar ve kazanılan zaferler hiçbir zamanda vuku bulmamıştır.” demiştir.\nBuna göre Türkiye Selçuklu Devleti ile ilgili olarak aşağıdakilerden hangisine ulaşılamaz?",
        choices: {
            correct: "Vakıf kurma geleneğini başlattıklarına",
            wrong: ["İmar çalışmalarına önem verdiklerine", "Güçlü bir ordularının olduğuna", "Bilim adamlarını himaye ettiklerine", "Güçlü bir sosyal ve kültürel yapı oluşturduklarına"]
        }
    }, {
        question_string: "Osmanlı Devleti'nin, Balkanlarda fethettiği topraklarda aşağıdakilerden hangisini uyguladığı söylenemez?",
        choices: {
            correct: "İnanç birliğini",
            wrong: ["Vergi adaletini", "İskân siyasetini", "Hoşgörü politikasını", "İmar çalışmalarını"]
        }
    }, {
        question_string: "Kanuni Dönemi’nde Osmanlı ülkesine gelen Busbecq; “Türkler arasında itibar, hizmet ve idari mevkiler kabiliyet ve faziletin ödülü oluyor. Kişi tembel ve sahtekâr ise hiçbir zaman yükselemiyor, küçümsenip hakir görülüyor. İşte Türkler bu nedenle, neye teşebbüs etseler başarılı oluyorlar ve hükmeden bir ırk olarak hâkimiyetlerinin sınırlarını her gün genişletiyorlar.” demiştir.\n Buna göre Osmanlı Devleti ile ilgili olarak;\nI. liyakata önem verildiği,\nII. toplumda hoşgörünün egemen olduğu,\nIII. toplumda dikey hareketliliğin olduğu\nifadelerinden hangilerine ulaşılabilir?",
        choices: {
            correct: "I ve III",
            wrong: ["Yalnız I", "Yalnız II", "I ve II", "II ve III"]
        }
    }, {
        question_string: "Osmanlı iktisadi anlayışının oluşmasında,\nI. örf,\nII. din,\nIII. coğrafya\n unsurlarından hangilerinin etkili olduğu savunulabilir?",
        choices: {
            correct: "I, II ve III",
            wrong: ["Yalnız I", "Yalnız II", "I ve II", "II ve III"]
        }
    }, {
        question_string: "Osmanlı Devleti’nin Dağılma Dönemi’nde aralarında Keçecizâde Fuat Paşa’nın da bulunduğu bir Avrupalı diplomatlar toplantısında şöyle bir konuşma geçer:\nDiplomat:\n— Zamanımızın en kuvvetli devleti hangisidir?\nFuat Paşa:\n— Osmanlı İmparatorluğu!\nDiplomat:\n— Nasıl olur?\nFuat Paşa:\n— Çünkü siz dışarıdan, biz içeriden var kuvvetimizle yıkmaya çalıştığımız hâlde o hâlâ ayakta duruyor.\nBu metinden hareketle Osmanlı Devleti ile ilgili olarak aşağıdakilerden hangisine ulaşılabilir? ",
        choices: {
            correct: "İç ve dış tehdit altında olduğuna",
            wrong: ["Dönemin en güçlü devleti olduğuna", "Denge politikasını başarıyla uyguladığına", "Osmanlıcılık siyaseti yaptığına", "Batı karşıtı bir politika izlediğine"]
        }
    }, {
        question_string: "Birinci Dünya Savaşı sırasında, Rusya’da gerçekleşen Bolşevik İhtilali sonucunda Çarlık yönetimi yıkılmış; yeni yönetim, ülkenin içinde bulunduğu çalkantılı durumdan dolayı savaştan ayrılma kararı almıştır.\nBu durumun;\nI. Rusya’nın işgal ettiği yerlerden çekilmesi,\nII. Osmanlı Devleti’nin savaştığı cephe sayısının azalması,\nIII. Rusya’nın Osmanlı Devleti’ni ekonomik olarak desteklemesi\ndurumlarından hangilerine neden olduğu savunulabilir?",
        choices: {
            correct: "I ve II",
            wrong: ["Yalnız I", "Yalnız II", "Yalnız III", "II ve III"]
        }
    }, {
        question_string: "Lozan Barış Konferansı’nın iç tüzük görüşmelerinde, konferansın adı, görüşmelere katılacak delege sayısı ve kurulacak komisyonlar ile komisyon başkanlarının seçimi konularında Türkiye’nin itirazlarına rağmen İtilaf Devletleri’nin teklifleri kabul edilmiştir.\nİtilaf Devletleri’nin bu tutumuyla ilgili olarak aşağıdakilerden hangisi söylenebilir? ",
        choices: {
            correct: "Türk milletinin Kurtuluş Savaşı’ndaki başarısını görmezlikten geldikleri",
            wrong: ["Kendi aralarındaki sorunların hepsini çözdükleri", "Türk-Sovyet yakınlaşmasını önlemek istedikleri", "Anadolu’dan çekilmek zorunda kalan Yunanlıları her konuda destekledikleri", "Uluslararası diplomatik kuralları gözettikleri"]
        }
    }, {
        question_string: "İstanbul’un işgalinin ardından Mebusan Meclisi, milletvekillerinin verdiği bir önergeyle güvenli bir ortamda görev yapma olanağı oluşuncaya kadar genel birleşimlerin ertelenmesi yönünde bir karar almıştır.\nBu kararın, aşağıdakilerden hangisine ortam hazırladığı söylenebilir?",
        choices: {
            correct: "Ankara’da Büyük Millet Meclisi’nin açılmasına",
            wrong: ["Kanunuesasi’nin uygulamadan kaldırılmasına", "İtilaf Devletleri’nin işgal politikasını değiştirmesine", "Temsil Heyeti ile İstanbul Hükûmeti arasındaki ilişkilerin gelişmesine", "İstanbul’daki işgal karşıtı örgütlenmelerin sona ermesine"]
        }
    }, {
        question_string: "1921 Teşkilat-ı Esasiye Kanunu’nun 1. maddesi, “Hâkimiyet kayıtsız şartsız milletindir.” şeklindedir.\nBu maddenin aşağıdakilerden hangisine ortam hazırladığı savunulabilir?",
        choices: {
            correct: "Cumhuriyet’in ilan edilmesine",
            wrong: ["Lozan Antlaşması’nın imzalanmasına", "Planlı ekonomiye geçilmesine", "Mecelle’nin kaldırılmasına", "Milletler Cemiyeti’ne üye olunmasına"]
        }
    }, {
        question_string: "Mustafa Kemal; “Ellerimiz deniz kıyısında ve zincirlerle bağlı bir hâlde bulunuyor ve ah bir kere hür olsak da şu denizde bir yüzsek diyorduk. İşte bugün özgürlüğümüzü kazandık.’’ demiştir.\nAşağıdakilerden hangisinin bu doğrultuda yapılmış olduğu söylenemez?",
        choices: {
            correct: "Hatay’ın ana vatana katılması",
            wrong: ["Kapitülasyonların kaldırılması ", "Kabotaj Kanunu’nun çıkarılması", "Boğazlar Komisyonu’nun kaldırılması", "Montrö Boğazlar Sözleşmesi’nin imzalanması"]
        }
    }, {
        question_string: "Türkiye’nin dış politikada yaşadığı tehlikeler bazı şairlerin dizelerine yansımıştır:\nVerilmeyecek şeyler vardır:\nŞeref gibi, şan gibi;\nKars gibi, Ardahan gibi!..\nBu dizelerin, aşağıdaki devletlerden hangisinin bu yerlere yönelik isteklerine dikkat çekmek amacıyla kaleme alındığı söylenebilir?",
        choices: {
            correct: "Sovyet Rusya",
            wrong: ["İngiltere", "Fransa", "İtalya", "Almanya"]
        }
    }, {
        question_string: "Afet İnan, Atatürk Hakkında Hatıralar ve Belgeler adlı eserinde Satı Kadın'ın Kazan Köyü'nün muhtarı olduğunu, seçimle köy idaresinin başına geçtiğini belirtmektedir.\nSatı Kadın'ın seçimle muhtar olabilmesi;\nI. cumhuriyetçilik,\nII. halkçılık,\nIII. devletçilik\nilkelerinden hangileriyle ilgilidir?",
        choices: {
            correct: "I ve II",
            wrong: ["Yalnız I", "Yalnız II", "Yalnız III", "II ve III"]
        }
    }];

    function changeColor() {
        myColor = colors[Math.floor(Math.random() * colors.length)];
        $('body').css('background-color', myColor);
        $('.quiz-box').css('color', '#fff');
        //$('.option-input:checked::after').css('background', myColor);
    };

    // An object for a Quiz, which will contain Question objects.
    var Quiz = function(quiz_name) {
            // Private fields for an instance of a Quiz object.
            this.quiz_name = quiz_name;

            // This one will contain an array of Question objects in the order that the questions will be presented.
            this.questions = [];
        }
        // A function that you can enact on an instance of a quiz object. This function is called add_question() and takes in a Question object which it will add to the questions field.
    Quiz.prototype.add_question = function(question) {
        // Randomly choose where to add question
        //var index_to_add_question = Math.floor(Math.random() * this.questions.length);
        var index_to_add_question = this.questions.length;
        this.questions.splice(index_to_add_question--, 0, question);
    }
    Quiz.prototype.render = function(container) {

        changeColor();

        // For when we're out of scope
        var self = this;

        // Hide the quiz results modal
        //$('#quiz-results').hide();

        // Write the name of the quiz
        //$('#quiz-name').text(this.quiz_name);

        // Create a container for questions
        var question_container = $('<div>').attr('id', 'question').appendTo(container);

        // Helper function for changing the question and updating the buttons
        function change_question() {

            self.questions[current_question_index].render(question_container);
            $('#prevButton').prop('disabled', current_question_index === 0);
            $('#nextButton').prop('disabled', current_question_index === self.questions.length - 1);

            // Determine if all questions have been answered
            var all_questions_answered = true;
            for (var i = 0; i < self.questions.length; i++) {
                if (self.questions[i].user_choice_index === null) {
                    all_questions_answered = false;
                    break;
                }
            }
            $('#submit-button').prop('disabled', !all_questions_answered);
        }

        // Render the first question
        var current_question_index = 0;
        change_question();

        // Add listener for the previous question button
        $('#prevButton').click(function() {
            if (current_question_index > 0) {
                current_question_index--;
                change_question();
            }
        });

        // Add listener for the next question button
        $('#nextButton').click(function() {
            if (current_question_index < self.questions.length - 1) {
                current_question_index++;
                change_question();
                changeColor();
            }
        });

        // Add listener for the submit answers button
        $('#submitButton').click(function() {
            changeColor();
            // Determine how many questions the user got right
            var score = 0;
            for (var i = 0; i < self.questions.length; i++) {
                if (self.questions[i].user_choice_index === self.questions[i].correct_choice_index) {
                    score++;
                }
            }

            // Display the score with the appropriate message
            var percentage = (score / self.questions.length);

            var scoremessage = self.questions.length + " soruda " + score + " doğru. ";
            var icon = '';
            var chartcolor = '';
            console.log(percentage);

            $('.percentage').data('percent', percentage * 100);
            $('.percentage span').text(percentage);

            var message;
            if (percentage === 1) {
                icon = "fa fa-smile-o";
                message = 'Tebrikler!';
                chartcolor = "green";
            } else if (percentage >= .75) {
                icon = "fa fa-smile-o";
                message = 'Tebrikler!';
                chartcolor = "green";
            } else if (percentage >= .5) {
                icon = "fa fa-meh-o";
                message = 'Biraz daha çalışmalısın!';
                chartcolor = "orange";
            } else {
                icon = "fa fa-meh-o";
                message = 'Git ve tarih çalış!';
                chartcolor = "red";
            }
            $('.score-label h1').html('<small>Merhaba </small>' + username + ', ' + 'Skorun:<i class="smiley"></i>');
            $('.message').text(message);
            $('.score-detail h3').text(scoremessage);
            $('.smiley').addClass(icon);
            $('#question-box').hide();
            $('#result').show();
            $('.percentage').easyPieChart({
                animate: 1000,
                lineWidth: 4,
                onStep: function(value) {
                    this.$el.find('span').text(Math.round(value));
                },
                onStop: function(value, to) {
                    this.$el.find('span').text(Math.round(to));
                },
                barColor: chartcolor
            });
            $('#prevButton, #nextButton, #submitButton').hide();
            $('.navigation-buttons #resultButton').show();
        });
        $('#resultButton').click(function() {
            changeColor();
            $('#result').hide();
            var table = $('#result-stats table').find('tbody');
            var tr;
            for (var i = 0; i < self.questions.length; i++) {
                tr = $('<tr>');
                if (self.questions[i].user_choice_index === self.questions[i].correct_choice_index) {
                    tr.append('<td><i class="fa fa-check-circle"></i>' + self.questions[i].question_string + '</td>');
                } else {
                    tr.append('<td><i class="fa fa-times-circle"></i>' + self.questions[i].question_string + '</td>');
                }
                if (self.questions[i].choices[self.questions[i].user_choice_index] !== undefined) {
                    tr.append('<td>' + self.questions[i].choices[self.questions[i].user_choice_index] + '</td>');
                } else {
                    tr.append('<td>' + '<span class="grey">Cevaplanmadı</span>' + '</td>');
                }
                tr.append('<td>' + self.questions[i].choices[self.questions[i].correct_choice_index] + '</td>');
                tr.appendTo(table);
            }
            $('#result-stats').show();
            $('#resultButton').hide()
        });
        // Add a listener on the questions container to listen for user select changes. This is for determining whether we can submit answers or not.
        question_container.bind('user-select-change', function() {
            var all_questions_answered = true;
            for (var i = 0; i < self.questions.length; i++) {
                if (self.questions[i].user_choice_index === null) {
                    all_questions_answered = false;
                    break;
                }
            }
            $('#submit-button').prop('disabled', !all_questions_answered);
        });
    }
    var Question = function(count, question_string, correct_choice, wrong_choices) {
            this.question_string = count + ". " + question_string;
            this.choices = [];
            this.user_choice_index = null; // Index of the user's choice selection

            // Random assign the correct choice an index
            this.correct_choice_index = Math.floor(Math.random() * wrong_choices.length + 1);
            var number_of_choices = wrong_choices.length + 1;
            for (var i = 0; i < number_of_choices; i++) {
                if (i === this.correct_choice_index)
                    this.choices[i] = correct_choice;
                else {
                    var wrong_choice_index = Math.floor(Math.random(0, wrong_choices.length));
                    this.choices[i] = wrong_choices[wrong_choice_index];

                    // Remove the wrong choice from the wrong choice array so that we don't pick it again
                    wrong_choices.splice(wrong_choice_index, 1);
                }
            }
        }
        // A function that you can enact on an instance of a question object. This function is called render() and takes in a variable called the container, which is the <div> that I will render the question in. This question will "return" with the score when the question has been answered.
    Question.prototype.render = function(container) {
        // For when we're out of scope
        var self = this;

        // Fill out the question label
        var question_string_h2;
        if (container.children('h2').length === 0) {
            question_string_h2 = $('<h2>').appendTo(container);
        } else {
            question_string_h2 = container.children('h2').first();
        }
        question_string_h2.text(this.question_string);

        // Clear any radio buttons and create new ones
        if (container.children('label').length > 0) {
            container.children('label').each(function() {
                var radio_button_id = $(this).attr('id');
                $(this).remove();
                container.children('label[for=' + radio_button_id + ']').remove();
            });
        }

        for (var i = 0; i < this.choices.length; i++) {

            // Create the label
            var choice_label = $('<label>')
                .attr('for', 'choices-' + i)
                .appendTo(container);

            // Create the radio button
            var choice_radio_button = $('<input>')
                .attr('id', 'choices-' + i)
                .attr('type', 'radio')
                .attr('name', 'choices')
                .attr('value', 'choices-' + i)
                .attr('class', 'option-input radio')
                .attr('checked', i === this.user_choice_index)
                .appendTo(choice_label);

            choice_label.append(this.choices[i]);

        }
        // Add a listener for the radio button to change which one the user has clicked on
        $('input[name=choices]').change(function(index) {
            var selected_radio_button_value = $('input[name=choices]:checked').val();

            // Change the user choice index
            self.user_choice_index = parseInt(selected_radio_button_value.substr(selected_radio_button_value.length - 1, 1));

            // Trigger a user-select-change
            container.trigger('user-select-change');
        });
    }
    $(document).ready(function() {
        changeColor();
        $('#name-input-box').css('border-bottom', 'solid thin ' + myColor);
        var quiz = new Quiz('My Quiz');
        for (var i = 0; i < all_questions.length; i++) {
            var question = new Question((i + 1), all_questions[i].question_string, all_questions[i].choices.correct, all_questions[i].choices.wrong);

            // Add the question to the instance of the Quiz object that we created previously
            quiz.add_question(question);
        }
        // Render the quiz
        var quiz_container = $('#question-box');
        $('.navigation-buttons').hide();
        $('#result').hide();
        $('#result-stats').hide();
        $('#name-form').on('submit', function(event) {
            event.preventDefault();
            username = $('#name-input-box').val();
            if (username !== '' && username !== undefined) {
                $('.name-box').hide();
                quiz.render(quiz_container);
                $('.navigation-buttons').show();
                $('#resultButton').hide();
            }
        });
    });

})(jQuery);