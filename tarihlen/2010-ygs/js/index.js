(function($) {
    var colors = ["#583119"];
    var username = '';
    var myColor;
    var all_questions = [{
        question_string: "Aşağıdakilerden hangisinin Cilalı Taş Devrini Yontma Taş Devrinden ayıran özelliklerden biri olduğu savunulamaz?",
        choices: {
            correct: "Araç ve gereç yapılması",
            wrong: ["Hayvanların evcilleştirilmesi", "Dokumacılığın başlaması", "Tarımla uğraşılması", "Köylerin kurulması"]
        }
    }, {
        question_string: "Çin’den başlayıp Orta Asya’yı aşarak Akdeniz ve Karadeniz’de sona eren İpek Yolu’nun Orta Asya’ da kurulan Türk devletlerinin bir süre denetimin­de olması bu devletleri,\nI. ekonomik açıdan gelişme,\nII. Orta Asya siyasetinde söz sahibi olma,\nIII. tarıma ticaretten fazla önem verme\ndurumlarından hangileri yönünde etkilediği savu­nulabilir?",
        choices: {
            correct: "I ve II",
            wrong: ["Yalnız I", "Yalnız II", "Yalnız III", "I, II ve III"]
        }
    }, {
        question_string: "Sami dillerinden olan Arapça, İslamiyet’ten önce Ara­bistan Yarımadası’yla sınırlıyken İslamiyet’ten sonra önem kazanmış ve İslam dünyasında ortak bir dil du­rumuna gelmiştir.\nAşağıdakilerden hangisinin bu durumun nedenle­rinden biri olduğu savunulamaz?",
        choices: {
            correct: "Emeviler Döneminde Arapların Arap olmayan Müslümanlardan üstün tutulması",
            wrong: ["Arapçanın Kur’an dili olması", "Fetihler yoluyla Arapçanın geniş alanlara yayıl­ması", "Arapçanın Emeviler Döneminde resmî dil olarak kabul edilmesi", "İslamiyeti kabul edenlerin sayısının artması"]
        }
    }, {
        question_string: "Osmanlı Devleti’yle Avusturya arasında 1533 yılında imzalanan İstanbul Antlaşması’nda, Avusturya impa­ratorunun Osmanlı sadrazamıyla protokol bakımın­dan denk sayılması ve Avusturya imparatorunun ba­rışı bozmadıkça Antlaşma’nın yürürlükte kalması kabul edilmiştir.\nBu duruma göre Osmanlı Devleti’yle ilgili olarak aşağıdakilerden hangisi söylenemez?",
        choices: {
            correct: "Sadrazamla padişahın yetkilerinin eşit olduğu",
            wrong: ["Savaştan galip çıktığı", "Güçlü bir devlet olduğu", "Avusturya üzerinde üstünlük kurduğu", "Barış süresinin Avusturya’nın davranışına bağlı olduğu"]
        }
    }, {
        question_string: "Avrupa’da XVI. yüzyılda din alanında görülen Re­form Hareketlerinin aşağıdaki sonuçlarından han­gisinin, Osmanlı Devleti’nin Avrupa ile siyasal ilişkileri üzerinde doğrudan etkisi olduğu savu­nulabilir?",
        choices: {
            correct: "Mezhep birliğinin parçalanması",
            wrong: ["Kilisenin topraklarının elinden alınması", "Halkın, bağlı bulunduğu prens veya hükümdarın kabul ettiği mezhebe girmek zorunda olması", "Katolik Kilisesinin kendi içinde düzenleme yapma gereği duyması", "Kültürel ve bilimsel gelişmelerde Katolik Kilisesi­nin baskısının azalması"]
        }
    }, {
        question_string: "Osmanlı Devleti’nde, tımar sistemiyle işletilmesi köylülere bırakılan toprağın,\nI. çift, yarım çift gibi büyüklüğüne göre tanımlan­ması,\nII. üretim vergisinin, ürünün belli bir oranı olarak hesaplanması,\nIII. mülkiyetinin devlete ait olması\ndurumlarından hangilerinin, büyük toprak sahip­lerinin ortaya çıkmasını ve Avrupa’dakine benzer feodal sistemin görülmesini engellediği savunu­labilir?",
        choices: {
            correct: "Yalnız III",
            wrong: ["I, II ve III", "I ve II", "Yalnız II", "Yalnız I"]
        }
    }, {
        question_string: "Aşağıdakilerden hangisinin, Osmanlı Devleti za­yıfladıkça İngiltere, Rusya ve Fransa devletleri arasında çıkar çatışmalarının odak noktalarından biri olduğu savunulamaz?",
        choices: {
            correct: "Mültezimler",
            wrong: ["Boğazlar", "Kapitülasyonlar", "Azınlıklar", "Kutsal yerler"]
        }
    }, {
        question_string: "Osmanlı Devleti’nde yaşayan Müslüman olmayan toplulukların, din ya da mezhep esasına göre örgüt­lenip yönetilmesi biçimine millet sistemi denir. Millet sisteminin,\nI. toplumu oluşturan grupların benliklerini koru­ması,\nII. toplumda din veya mezhep değiştirmenin ya­saklanması,\nIII. Osmanlı toplumunun kaynaşması\ndurumlarından hangilerine neden olduğu savunu­labilir?",
        choices: {
            correct: "Yalnız I",
            wrong: ["I, II ve III", "I ve II", "Yalnız III", "Yalnız II"]
        }
    }, {
        question_string: "İtalya, Trablusgarp’ta Mustafa Kemal ve arkadaşları­nın örgütlediği yerli halkın direnişiyle karşılaşınca Ege Denizi’ndeki adalara asker çıkarıp Rodos ve On İki Ada’yı işgal etti. Bu sırada Osmanlı Devleti’ne karşı Balkan ittifakı kuruldu ve Balkan Savaşları başladı. Bu durumla ilgili olarak\nI. İtalya Akdeniz’e egemen olmak istemektedir.\nII. Balkan Devletleri, Osmanlı Devleti’nin zor duru­munu fırsat olarak değerlendirmiştir.\nIII. Trablusgarp Savaşı ve Balkan Savaşları aynı tarihte başlamıştır.\nyargılarından hangilerine ulaşılabilir?",
        choices: {
            correct: "I ve II",
            wrong: ["Yalnız I", "Yalnız II", "Yalnız III", "I, II ve III"]
        }
    }, {
        question_string: "Yunanlıların Anadolu’ya asker çıkarması ve Anlaşma Devletlerinin İstanbul’u resmen işgal etmesi gelişmelerinin aşağıdakilerden hangisine neden olduğu savunulamaz?",
        choices: {
            correct: "Anlaşma Devletleriyle Mondros Ateşkes Anlaşması’nın imzalanmasına",
            wrong: ["Anadolu’da işgal edilen yerlerin genişlemesine", "Anlaşma Devletlerinin İstanbul Hükümetine bas kısının artmasına", "Anadolu’da ulusal hareketin güçlenmesine", "İstanbul Hükümetine halkın desteğinin azalmasına"]
        }
    }, {
        question_string: "Erzurum Kongresi’ni, İstanbul’da bulunan İngiliz ve Fransız temsilcileri ihtilal olarak nitelendirmiş ve Os­manlı saltanatı aleyhine sonuçlar verebilecek gelişme olarak değerlendirmiştir. Bu değerlendirmenin Erzurum Kongresi’nin,\nI. ulusal istencin egemen kılınması,\nII. yabancı bir devletten teknik ve ekonomik yardım alınabilmesi,\nIII. Mebuslar Meclisi (Meclis-i Millî)’nin hemen top­lanması ve merkezî hükümetin aldığı kararları Meclisin denetimine sunması\nkararlarının hangilerinden kaynaklandığı savunu­labilir?",
        choices: {
            correct: "I ve III",
            wrong: ["Yalnız II", "Yalnız I", "I, II ve III", "I ve II"]
        }
    }, {
        question_string: "Aşağıdakilerden hangisinin Cumhuriyet Dönemin­de yapılan inkılâpları korumak ve onların sürek­liliğini sağlamak amacında olduğu savunulamaz?",
        choices: {
            correct: "İki dereceli seçim sisteminden tek dereceli seçim sistemine geçilmesi",
            wrong: ["İstiklal Mahkemelerinin kurulması", "Takrir-i Sükün Kanunu’nun çıkarılması", "Terakkiperver Cumhuriyet Fırkasının kapatılması", "Serbest Cumhuriyet Fırkasının kendisini feshet­mesi"]
        }
    }, {
        question_string: "Atatürk: “Türkiye halkı, ırki veya dinî ve kültürel yön­den birleşmiş, bir diğerine karşı karşılıklı hürmet ve fedakârlık hisleriyle dolu ve kaderi, geleceği ve çıkar­ları ortak olan toplumdur.” demiştir. Atatürk’ün bu anlatımıyla,\nI. kültürel zenginlikleri paylaşan Türkiye Cumhu­riyeti vatandaşlığı,\nII. insani değerleri temel alan Atatürk milliyetçiliği,\nIII. toplumun birlik ve beraberlik ruhuyla bütünleş­tiği\ndurumlarından hangilerini kastettiği savunula­bilir?",
        choices: {
            correct: "I, II ve III",
            wrong: ["Yalnız III", "Yalnız II", "Yalnız I", "I ve II"]
        }
    }, {
        question_string: "Türkiye’de çok partili döneme ilk geçiş denemelerinin başarısız olması üzerine, 1945 yılına kadar çok partili döneme geçiş ertelenmiştir. Bu ertelemede, aşağıdaki ilkelerden öncelikle hangisinin kötüye kullanılmasını engelleme amacı olduğu savunulabilir?",
        choices: {
            correct: "Laiklik",
            wrong: ["Cumhuriyetçilik", "İnkılapçılık", "Milliyetçilik", "Halkçılık"]
        }
    }, {
        question_string: "Lozan Antlaşması’ndan sonra, 1936’da Türkiye’nin Boğazlarda asker bulundurma isteğini kabul ettirmesinde,\nI. Almanya’nın Ren Bölgesi’ne girmesi,\nII. İtalya’nın Habeşistan’ı işgal etmesi,\nIII. Rusya’da rejim değişikliği olması\ndurumlarından hangilerinin etkili olduğu savunu­labilir?",
        choices: {
            correct: "I ve II",
            wrong: ["Yalnız III", "Yalnız II", "Yalnız I", "II ve III"]
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