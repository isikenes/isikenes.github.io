(function($) {
    var colors = ["#583119"];
    var username = '';
    var myColor;
    var all_questions = [{
        question_string: "Tarih öğretmeni sınıfa ferman, tarihî para, Çanakkale’de şehit düşen bir askerin hatıratı, İstiklal madalyası ve Halil İnalcık’ın Devlet-i Aliyye isimli eserini getirerek, öğrencilerine bu materyallerden hangisinin birinci el kaynaklar içerisinde yer alamayacağını sormuştur.\nÖğrencilerin bu soruya doğru cevap olarak aşağıdakilerden hangisini vermesi beklenir?",
        choices: {
            correct: "Halil İnalcık’ın eseri",
            wrong: ["Ferman", "Tarihî para", "İstiklal madalyası", "Şehidin hatıratı"]
        }
    }, {
        question_string: "Türklerde hayvancılığın gelişmesinde aşağıdakilerden hangisinin etkili olduğu savunulamaz?",
        choices: {
            correct: "Din anlayışı",
            wrong: ["Yaşam tarzı", "Coğrafi şartlar", "Ticaret", "Ulaşım ve taşımacılık"]
        }
    }, {
        question_string: "I. Valiliklerin kurulması\nII. Kur’an-ı Kerim’in çoğaltılması\nIII. Beytülmal’ın sistemleştirilmesi\nYukarıdaki gelişmelerden hangileri Hz. Ömer Dönemi’nde gerçekleşmemiştir?",
        choices: {
            correct: "Yalnız II",
            wrong: ["Yalnız I", "Yalnız III", "I ve II", "I, II ve III"]
        }
    }, {
        question_string: "Malazgirt Savaşı’ndan sonra Sultan Alparslan, komutanlarına hitaben “Toprak fethedenin malıdır.” sözünü söylemiştir.\nAlparslan bu sözle aşağıdakilerden hangisini gerçekleştirmeyi amaçlamıştır?",
        choices: {
            correct: "Anadolu’yu kısa sürede fethetmek",
            wrong: ["Bizans’ı anlaşmaya zorlamak", "Yeni bir yönetim şekli oluşturmak", "Hâkimiyetini güçlendirmek", "Çıkabilecek isyanları önlemek"]
        }
    }, {
        question_string: "Fatih Sultan Mehmet, Trabzon Rum İmparatorluğu’nu fethettikten sonra Rum asıllı Hristiyan beylerine Rumeli’de, Arnavut beylerinden bazılarına da Trabzon’da timar vermiştir.\nFatih Sultan Mehmet’in bu uygulamayla aşağıdakilerden hangisini amaçladığı savunulabilir?",
        choices: {
            correct: "Merkezî otoriteyi güçlendirmeyi",
            wrong: ["Rumların din ve mezhep birliğini parçalamayı", "Bölgeler arasında üretim farklılığını azaltmayı", "Yönetim anlayışını değiştirmeyi", "İltizam sistemini yaygınlaştırmayı"]
        }
    }, {
        question_string: "Osmanlı Devleti’nde XVIII. yüzyılda Divanıhümayunun kalemlerinin başında olan reisülküttabın öneminin artmasında,\nI. iç ve dış yazışma kurallarını iyi bilmesi,\nII. devletler arası ilişkilerde diplomasinin önem kazanması,\nIII. âyanların güçlenmesi\ndurumlarından hangilerinin etkili olduğu savunulabilir?",
        choices: {
            correct: "I ve II",
            wrong: ["Yalnız I", "Yalnız II", "Yalnız III", "II ve III"]
        }
    }, {
        question_string: "XIX. yüzyılda Osmanlı Devleti’nde Katoliklerin koruyuculuğunu Fransa, Ortodoksların koruyuculuğunu Rusya, Protestanların koruyuculuğunu da İngiltere üstlenmiştir.\nBu durumun Osmanlı Devleti’nde, aşağıdakilerden hangisine neden olduğu savunulamaz?",
        choices: {
            correct: "Yönetimde dinî kuralların terk edilmesine",
            wrong: ["Müslüman olmayanlara yönelik ıslahat yapılmasına", "İç işlerine karışılmasına", "Yıkılış sürecinin hızlanmasına", "Egemenlik haklarının kısıtlanmasına"]
        }
    }, {
        question_string: "Galata Karakolu Tabur Ağasına müracaat eden bir Hristiyan, kendisine gâvur diyen bir Müslümandan şikâyetçi olmuş, bunun üzerine Tabur Ağası, Müslümanı karakola çağırarak “Oğul, anlatamadık mı? Şimdi Tanzimat var, gâvura gâvur denmeyecek.” demiştir.\nBuna göre Osmanlı Devleti ile ilgili olarak aşağıdakilerden hangisine ulaşılabilir?",
        choices: {
            correct: "Din ve inançlarından dolayı kimsenin aşağılanmayacağına",
            wrong: ["Millet sisteminin uygulanmaya başlandığına", "Kanunuesasi’nin ilan edildiğine", "Müslüman olmayanların yönetime katıldığına", "Avrupa devletlerinin Müslüman olmayanları kışkırttığına"]
        }
    }, {
        question_string: "Osmanlı Devleti’nde ayrılıkçı hareketler önce Balkanlarda başlamıştır.\nBu duruma aşağıdakilerden hangisinin neden olduğu savunulamaz?",
        choices: {
            correct: "Balkanlarda Müslümanların bulunması",
            wrong: ["Fransız İhtilali’nin getirdiği milliyetçilik akımı", "Avrupa devletlerinin bölge halkını kışkırtması", "Coğrafi konum itibarıyla Avrupa’daki gelişmelerin yakından takip edilmesi", "Osmanlı merkezî yönetiminin zayıflaması"]
        }
    }, {
        question_string: "Mustafa Kemal 1921’de, “TBMM Hükûmeti, hayat ve istikbalini kurtarmayı yegâne maksat ve gaye bildiği halkı, emperyalizm ve kapitalizm tahakkümünden ve zulmünden kurtararak idare ve hâkimiyetinin hakiki sahibi kılmakla gayesine vasıl olacağı kanaatindedir.” demiştir.\nBu ifadeye göre Mustafa Kemal ile ilgili olarak aşağıdakilerin hangisine ulaşılamaz?",
        choices: {
            correct: "Her türlü yabancı yatırıma karşı çıktığına",
            wrong: ["Sömürge düzenine karşı çıktığına", "Kayıtsız şartsız bağımsızlık isteğine", "Millî egemenliği amaçladığına", "Millî bir ekonomi sistemine taraftar olduğuna"]
        }
    }, {
        question_string: "I. Yunanistan’ın İzmir’i işgal etmesi\nII. Anlaşma Devletlerinin İstanbul’u işgal etmesi\nIII. Doğu işlerini görüşmek üzere Londra’da yapılacak konferansa, Osmanlı ve TBMM Hükûmetlerinin birlikte çağrılması\nYukarıdaki gelişmelerden hangileri, Anlaşma Devletleri adına İngiliz Başbakanı LIoyd George’un, “Biz Türkiye’yi ne başkomutandan ne de çoğunlukla Türk olan Anadolu’nun ve Trakya’nın zengin ve ünlü topraklarından yoksun bırakmak için dövüşüyoruz.” açıklaması ile bağdaştırılamaz?",
        choices: {
            correct: "I ve II",
            wrong: ["Yalnız I", "Yalnız II", "Yalnız III", "II ve III"]
        }
    }, {
        question_string: "Aşağıda İran ve Mısır’da Mustafa Kemal Atatürk adına basılmış pullara yer verilmiştir.\n[Resim]\nBu pulların basılmasının aşağıdakilerden hangisini gösterdiği savunulabilir?",
        choices: {
            correct: "Atatürk’ün, dönemini etkileyen bir lider olduğunu",
            wrong: ["Atatürk’ün uluslararası ilişkilerde eşitlik ilkesini benimsediğini", "Türk iç politikasının gerçekçi hedefler doğrultusunda oluştuğunu", "Atatürk’ün, inkılaplarında Batı’ya yöneldiğin", "İslam dünyasında cumhuriyet rejimlerinin yayıldığını"]
        }
    }, {
        question_string: "Atatürk’ün “Büyük devletler kuran ecdadımız, büyük ve kapsamlı medeniyetlere de sahip olmuştur. Bunu aramak, tetkik etmek, Türklüğe ve dünyaya bildirmek bizler için bir borçtur. Türk çocuğu ecdadını tanıdıkça daha büyük işler yapmak için kendinde kuvvet bulacaktır.” sözüyle tarih biliminin aşağıdaki kazanımlarından hangisine vurgu yaptığı savunulamaz?",
        choices: {
            correct: "Tarih öncesi çağları öğrenme",
            wrong: ["Özgüven kazanma", "Millî değerleri ve kültürü tanıma", "İleriye yönelik değerlendirmeler yapabilme", "Toplumsal gelişmeleri anlayabilme"]
        }
    }, {
        question_string: "Mustafa Kemal, “Devlet idaresinde bütün kanunlar, nizamlar ilmin çağdaş medeniyete temin ettiği esas ve şekillere, dünya ihtiyaçlarına göre yapılır ve tatbik edilir.” demiştir.\nMustafa Kemal’in bu ifadesi ile aşağıdaki ilkelerden hangisi tanımlanmıştır?",
        choices: {
            correct: "Laiklik",
            wrong: ["Halkçılık", "Devletçilik", "milliyetçilik", "Cumhuriyetçilik"]
        }
    }, {
        question_string: "1924 yılında Türkiye ile Almanya arasında bir dostluk antlaşması imzalanmıştır. Bu antlaşma sonrasında Almanya, Türkiye ile iktisadi ve mali ilişkilerini geliştirmek ve bu suretle siyasal yakınlık da kurmak istemiştir.\nBu bilgiyle aşağıdakilerden hangisine ulaşılabilir?",
        choices: {
            correct: "Almanya’nın Türkiye ile çok yönlü ilişkiler kurmak istediğine",
            wrong: ["Almanya’nın siyasi ve ekonomik ilişki kurduğu tek ülkenin Türkiye olduğuna", "Türkiye’nin ekonomik açıdan Almanya’ya bağımlı olduğuna", "İki ülke arasındaki ticari ilişkilerin 1924’te başladığına", "Türkiye’nin dış politikasını Almanya’ya göre şekillendirdiğine"]
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