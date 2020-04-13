(function($) {
    var colors = ["#583119"];
    var username = '';
    var myColor;
    var all_questions = [{
        question_string: "Parşömenin Bergama şehrinde icat edilmiş olmasıyla aşağıdaki olaylardan hangisi arasında doğrudan bir ilişki kurulabilir?",
        choices: {
            correct: "Bergama Kütüphanesinin, Antik Çağ’ın en zengin iki kütüphanesinden biri olması",
            wrong: ["III. Attalos’un Bergama Krallığı’nı bir vasiyetle Roma halkına bırakması", "Bergama Krallığı’nın İyonya ayaklanmasına destek vermesi", "İskenderiye Kütüphanesinin yakılması", "Roma’nın MÖ 129’da Bergama Krallığı’nı ele geçirmesi"]
        }
    }, {
        question_string: "Arap ülkelerinden kuzeye, Bizans’tan doğuya uzanan ticaret yolları üzerinde yaşayan Hazarlar, VII. ve IX. yüzyıllar arasında bulundukları bölgede huzuru ve ulaşım güvenliğini sağlayarak bu dönemin Hazar Barış Çağı olarak adlandırılmasına neden olmuşlardır.\nBu durumun, aşağıdakilerden hangisinde etkili olduğu savunulamaz?",
        choices: {
            correct: "Türkçenin ortak dil olarak kullanılmasında",
            wrong: ["Ticaretin canlanmasında", "Kültürel etkileşimin artmasında", "Farklı dinlerin yayılmasında", "Ülkede refahın yükselmesinde"]
        }
    }, {
        question_string: "İslamiyet öncesi Arabistan’da barışın hâkim olduğu “Haram Ayları”nda Mekke ve çevresinde panayırlar kurulur, ticaret yapılır, eğlenceler ve şiir yarışmaları düzenlenirdi. Bu dönemde ayrıca putların bulunduğu Kâbe ziyaret edilirdi.\nBuna göre aşağıdakilerden hangisi ileri sürülemez?",
        choices: {
            correct: "Arapçanın farklı coğrafyalara yayıldığı",
            wrong: ["Sosyal ve kültürel gelişmelerin yaşandığı", "Dinî etkinliklerin yapıldığı", "Arap edebiyatının geliştiği", "Toplumsal barışın sağlandığı"]
        }
    }, {
        question_string: "Anadolu Selçuklu Devleti’nde hükümdarların Keyhüsrev, Keykubat ve Keykavus gibi adlar kullanmalarının aşağıdakilerden hangisini gösterdiği savunulabilir?",
        choices: {
            correct: "Fars kültürünün etkisinde kaldıklarını ",
            wrong: ["İlk Türk devletlerine ait gelenekleri devam ettirdiklerini", "Anadolu’nun eski kültürlerinden etkilendiklerini", "Arapça unvanları öne çıkardıklarını", "Bizans’ın hükümdarlık unvanlarını kullandıklarını"]
        }
    }, {
        question_string: "Osmanlı Devleti, Rumeli’ye geçmesiyle birlikte ele geçirdiği topraklara Anadolu’nun çeşitli yerleşim yerlerinden önemli miktarda Türk nüfusu yerleştirmiştir.\nBu durumun aşağıdakilerden hangisine neden olduğu savunulabilir?",
        choices: {
            correct: "Osmanlı egemenliğinin Balkanlarda giderek güçlenmesine",
            wrong: ["Balkan devletlerinin siyasi ayrıcalıklar kazanmasına", "Osmanlı Devleti’ndeki Türk nüfusunun azalmasına", "Anadolu’da Celâli İsyanlarının çıkmasına", "Avrupalı devletlerle ilişkilerin gelişmesine"]
        }
    }, {
        question_string: "Viyana Kongresi’nde Kutsal İttifak oluşturan monarşik Avrupa devletleri; ırk, dil, din unsurlarını gözetmeden sınırları yeniden çizmiş ancak bu durum tepkilere yol açmıştır. Bu devletler, monarşik yapılarını korumak için tepkilere karşı baskı ve şiddet uygularken içlerinden bazıları Osmanlı Devleti’nde çıkan Yunan isyanını desteklemişlerdir.\nBu durum aşağıdakilerden hangisinin bir göstergesidir?",
        choices: {
            correct: "Avrupa devletlerinin çıkarları doğrultusunda hareket ettiğinin",
            wrong: ["Avrupa devletlerinin yönetime halkın katılımını hedeflediğinin", "Osmanlı Devleti’nin ıslahat çalışmaları yaptığının", "Osmanlı Devleti’nin denge politikası izlediğinin", "Avrupa’da barış ortamının sağlandığının"]
        }
    }, {question_string: "Osmanlı Devleti’nde 1856-1909 yılları arasında, Müslüman olmayanlar askerlik bedeli ödeyerek askerlikten muaf tutulmuştur. 1909’da çıkarılan bir kanunla askerlik muafiyeti kaldırılarak Müslüman olmayanlar da askere alınmaya başlanmıştır.\nAşağıdakilerden hangisinin, Müslüman olmayanların askere alınma nedenlerinden biri olduğu savunulamaz?",
        choices: {
            correct: "Avrupa devletlerinin iç işlerine karışmalarını önlemek",
            wrong: ["Zorunlu askerlik sistemini yaygınlaştırmak", "Anayasadaki eşitlik ilkesini hayata geçirmek", "Müslüman olmayanların devlete bağlılığını güçlendirmek", "Ordunun asker sayısını artırmak"]
        }
    }, {
        question_string: "Aşağıdakilerden hangisinin, Osmanlı Devleti’nde Türk milliyetçiliğinin gelişmesinde etkili olduğu savunulamaz?",
        choices: {
            correct: "Tanzimat Fermanı’nın ilan edilmesi",
            wrong: ["Birinci Dünya Savaşı’nda Osmanlı padişahının halife unvanıyla yaptığı cihat çağrısına Arapların uymaması", "Rusya’dan gelen Türk aydınlarının faaliyetleri", "Yapılan ıslahata rağmen Müslüman olmayanların ayrılıkçı hareketlerinin devam etmesi", "Fransız İhtilali’nin Türk aydınlarını etkilemesi"]
        }
    }, {
        question_string: "Amasya Genelgesi’nin 6. maddesi “Askerî ve millî örgütlerin hiçbir biçimde dağıtılmaması, komutanlıkların başkalarına bırakılmaması, silah ve cephanenin elden çıkarılmaması, vatanın herhangi bir yerinde yeniden başlayacak bir düşman işgali bütün orduyu ilgilendirdiğinden vatanın hep birlikte savunulması” şeklindedir.\nBu maddeye göre aşağıdakilerden hangisine ulaşılamaz?",
        choices: {
            correct: "Temsilciler Kurulunun hükûmet gibi hareket ettiğine",
            wrong: ["İşgallere karşı direnileceğine", "Anlaşma Devletlerine cephe alındığına", "Askerî ve sivil örgütlerin birlikte hareket etmesi gerektiğine", "İş başındaki komutanların görevlerini terk etmemesine"]
        }
    }, {
        question_string: "Daha önce Millî Mücadele’ye cephe olan İstanbul Hükûmeti, Ali Rıza Paşa’nın sadrazam olmasıyla Millî Mücadele taraftarlarıyla yakın ilişki içine girerek Amasya Görüşmelerinde bulunmuştur.\nİstanbul Hükûmetinin tutum değişikliğine aşağıdakilerden hangisinin neden olduğu savunulabilir?",
        choices: {
            correct: "Millî Mücadele taraftarlarının giderek güçlenmesinin",
            wrong: ["Anlaşma Devletlerinin baskısından kurtulmak istemesinin", "Londra Konferansı’na TBMM Hükûmetinin de çağrılmasının", "Doğu Cephesi’nin kapanmasının", "Batı Cephesi’nde düzenli ordunun kurulmasının"]
        }
    }, {
        question_string: "Sovyet Rusya, Kurtuluş Savaşı sırasında TBMM Hükûmetine sağladığı askerî ve ekonomik yardımlarla Millî Mücadele’ye destek vermiştir.\nAşağıdakilerden hangisinin, Sovyet Rusya’nın bu politikasının nedenlerinden biri olduğu savunulamaz?",
        choices: {
            correct: "Türk ve Rus halkları arasında tarihten gelen dostluk bağları",
            wrong: ["Anlaşma Devletlerinin Boğazları kontrol etmesini önleme isteği", "Sovyet Rusya’nın uluslararası alandaki yalnızlığı", "Türkiye’ye sosyalist rejim ihraç etme düşüncesi", "Anlaşma Devletlerinin Sovyet Rusya ile Türkiye’nin ortak düşmanı olmaları"]
        }
    }, {
        question_string: "Harf inkılabı sırasında, Latin alfabesinde bulunan bazı harfler alınmadığı gibi Türkçeye özgü bazı harfler de üretilmiştir.\nBu uygulamalara dayanarak harf inkılabıyla ilgili aşağıdakilerden hangisine ulaşılabilir?",
        choices: {
            correct: "Latin alfabesinin Türkçeye uyarlandığına",
            wrong: ["Arap alfabesinin bir süre daha kullanıldığına", "Arap alfabesinin bazı harflerinin yeni alfabede yer aldığına", "Eski Türk alfabelerinden de yararlanıldığına", "Latin alfabesinin alınmasının tepkiyle karşılandığına"]
        }
    }, {
        question_string: "Ülkedeki seçim sonuçlarını, seçmenlerin eğitim düzeyine bakarak yorumlamak ve eğitim düzeyi daha yüksek olanların yönetimde ve siyasette daha çok söz sahibi olması gerektiğini savunmanın, aşağıdaki Atatürk ilkelerinden hangisine aykırı bir yaklaşım olduğu savunulabilir?",
        choices: {
            correct: "Halkçılık",
            wrong: ["Laiklik", "Devletçilik", "Milliyetçilik", "İnkılapçılık"]
        }
    }, {
        question_string: "Atatürk Dönemi’nde Türkiye, izlediği barışçı dış politika sayesinde bölgede bir istikrar unsuru olmuştur.\nO dönemde, Türkiye’nin bu konuma ulaşmasında aşağıdaki gelişmelerden hangisinin etkisi olmamıştır?",
        choices: {
            correct: "Kuzey Atlantik Antlaşması Örgütüne (NATO) üye olunması",
            wrong: ["Milletler Cemiyetine üye olunması", "Balkan Antantı’nın imzalanması", "Batılı ülkeler ile Sovyetler Birliği arasında hassas bir denge kurulması", "Sadabat Paktı’nın imzalanması"]
        }
    }, {
        question_string: "Bir ülkenin jeopolitiğini oluşturan ana unsurlar;\nI. sosyo-kültürel değerleri,\nII. ekonomik değerleri,\nIII. coğrafi konumu,\nIV. askerî değerleri\nolarak belirlenmiştir.\nBunlardan hangileri, bir ülke jeopolitiğinin değişen unsurları olarak kabul edilebilir?",
        choices: {
            correct: "I, II ve IV",
            wrong: ["I ve III", "II ve III", "III ve IV", "I, II ve III"]
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
                message = 'Tebrikler! Tarihin iyiymiş!';
                chartcolor = "green";
            } else if (percentage >= .75) {
                icon = "fa fa-smile-o";
                message = 'Tebrikler! Tarihin fena değilmiş!';
                chartcolor = "green";
            } else if (percentage >= .5) {
                icon = "fa fa-meh-o";
                message = 'Biraz daha tarih çalışmalısın!';
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