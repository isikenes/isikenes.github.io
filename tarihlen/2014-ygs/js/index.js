(function($) {
    var colors = ["#583119"];
    var username = '';
    var myColor;
    var all_questions = [{
        question_string: "Tarih öncesi çağların işlendiği bir derste aşağıdaki konuşma geçer:\nÖğrenci:\n-Öğretmenim, geçmişte yaşanmış bir olayı bilmemizin bize ne faydası olacak? Hayatta bizim ne işimize yarayacak?\nÖğretmen:\n-Tarih okumak, ... \nBu konuşmada boş bırakılan yere,\nI. başkalarının yaşadığı olayların neden sonuçlarından dersler çıkarmayı sağlar\nII. geçmiş çağlar üzerine düşünerek insanlık bilincini geliştirir\nIII. başkalarının yaşadıklarını zihinde canlandırarak empati yeteneğini geliştirir\nyargılarından hangileri getirilebilir?",
        choices: {
            correct: "I, II ve III",
            wrong: ["Yalnız I", "Yalnız II", "I ve II", "II ve III"]
        }
    }, {
        question_string: "“Türk milleti için gece uyumadım, gündüz oturmadım… Ondan sonra Tanrı irade ettiği ve lütfettiği için talih ve kısmetim olduğu için ölecek milleti diriltip kaldırdım, çıplak milleti giydirdim, fakir milleti zengin ettim, nüfusu az milleti çok ettim. Başka illi milletler, başka kağanlı milletler arasında onları pek üstün kıldım. Dört bucaktaki milletleri hep barışa mecbur ettim ve düşmanlıktan vazgeçirdim.”\nOrhun Yazıtlarında yer alan ve hakanın yaptığı işleri anlattığı bu metne göre, hakanla ilgili olarak aşağıdaki yargılardan hangisine ulaşılamaz?",
        choices: {
            correct: "Hesap verme zorunluluğu yoktur.",
            wrong: ["Kararlarıyla halkın geleceğini tayin etmiştir.", "Pek çok yetkiyi kendinde toplamıştır.", "Tanrı ona kut vermiştir.", "Önemli görevlerinden biri halkın refahını sağlamak olmuştur."]
        }
    }, {
        question_string: "Dört Halife Devri’nde Hz. Ebubekir’in ardından Hz. Ömer halife seçilmiştir. Bu dönemde Mısır, Suriye, Irak, İran ve Azerbaycan fethedilmiştir.\nYalnız bu bilgiye dayanarak\nI. İslam Devleti’nde saltanat sistemine geçildiği,\nII. İslam ordularının güçlü olduğu,\nIII. İslamiyet’in yayıldığı\ndurumlarından hangilerine ulaşılabilir?",
        choices: {
            correct: "II ve III",
            wrong: ["Yalnız II", "I ve II", "I ve III", "I, II ve III"]
        }
    }, {
        question_string: "Selçuklular, 1071 Malazgirt Savaşı’ndan 1176 Miryokefalon Savaşı’na kadar geçen sürede hem Bizans ve Haçlı saldırılarını durdurmak hem de Türk beylikleriyle özellikle de Danişmentliler ve Suriye’deki Eyyubilerle mücadele etmek zorunda kalmıştır.\nBu durumun, aşağıdakilerden hangisine neden olduğu savunulabilir?",
        choices: {
            correct: "Anadolu Selçuklularının sosyal ve ekonomik gelişiminin yavaşlamasına",
            wrong: ["Anadolu’nun hızla Türkleşmesine", "Bizans ve Haçlılara karşı Anadolu’da Türk siyasi birliğinin sağlanmasına", "Selçuklularda merkezî yönetim anlayışının değişmesine", "Hanedan üyeleri arasındaki taht kavgalarının azalmasına"]
        }
    }, {
        question_string: "Osmanlı Devleti’nde devşirme usulü çerçevesinde Hristiyan reayanın çocukları, kapıkulu ocaklarına asker yetiştirmek üzere toplanır ve uzun bir eğitim sürecinden geçirilirdi. Bu sürecin ilk aşaması, çocukların Türk ailelerinin yanına verilmesiydi.\nDevşirilen çocukların Türk ailelerinin yanına verilme nedeninin, aşağıdakilerden hangisi olduğu savunulabilir?",
        choices: {
            correct: "Türk-İslam gelenek ve göreneklerinin öğretilmesi ",
            wrong: ["Silah kullanmada maharet kazandırılması", "Sportif faaliyetlerde yetiştirilmesi", "Meslek sahibi olmalarının sağlanması", "Yönetimde deneyim kazandırılması"]
        }
    }, {
        question_string: "Osmanlı Devleti; 1517’de Mısır ve Suriye’yi topraklarına katmış, Mekke ve Medine gibi İslam dünyasının kutsal şehirlerine de hâkim olmuştur.\nAşağıdakilerden hangisinin, Osmanlı Devleti’nin bu bölgeye yönelik politikalarından biri olduğu savunulamaz?",
        choices: {
            correct: "Hukuk birliğini sağlamak",
            wrong: ["İslam dünyasının önderi olmak", "Ticaret yollarını denetim altına almak", "Hac yollarının güvenliğini sağlamak", "Yeni vergi alanları kazanmak"]
        }
    }, {
        question_string: "Bir zaman makinesi icat eden Enes, Osmanlı Devleti’nin hüküm sürdüğü yıllara bir yolculuk yapmıştır. Enes bu yolculuğunda, Mebuslar Meclisinin açık olduğunu, değişik fırka ve cemiyetlerin bu Mecliste temsil edildiğini görmüştür.\nEnes’in, bu yolcuğu aşağıdaki dönemlerden hangisine yaptığı söylenebilir?",
        choices: {
            correct: "II. Meşrutiyet",
            wrong: ["I. Meşrutiyet", "Lale Devri", "Tanzimat Dönemi", "II. Mahmut Devri"]
        }
    }, {
        question_string: "III. Selim Dönemi’nde Avrupa devletlerinin Londra, Paris, Viyana ve Berlin gibi önemli başkentlerinde daimî Osmanlı elçilikleri açılmıştır.\nBu elçiliklerin açılmasıyla Osmanlı Devleti’nin,\nI. Avrupa devletlerini daha yakından tanıma,\nII. Avrupa’daki siyasal gelişmeleri inceleme,\nIII. bilimsel ve teknolojik yeniliklerden haberdar olma\nolanaklarından hangilerini elde ettiği savunulabilir?",
        choices: {
            correct: "I, II ve III",
            wrong: ["Yalnız II", "I ve II", "I ve III", "II ve III"]
        }
    }, {
        question_string: "İngiliz Yüksek Komiseri Amiral de Robeck, Sivas Kongresi’yle ilgili, “Millî hareket, Anadolu’da müstakil bir cumhuriyete doğru gelişmektedir. Bu hareket, İstanbul’dan bilhassa Harbiye Nezaretinden desteklenmektedir. Bu yeni milliyetçi hareket, bugünkü Damat Ferit Hükûmetinden ziyade halk efkârını temsil etmektedir… Hükûmetin kabul edeceği bir anlaşma, barış ve huzur getirmeyecektir. Çünkü milliyetçiler onu kabul etmeyecektir. Onlara, silah kuvvetiyle kabul ettirmek gerekecektir. Hükûmetin emri artık yapılmamaktadır.” demiştir.\nAmiral de Robeck’in bu ifadesiyle aşağıdakilerden hangisine ulaşılamaz?",
        choices: {
            correct: "Anlaşma Devletlerinin, İstanbul Hükûmetini desteklemesi gerektiğine",
            wrong: ["İstanbul’daki bazı çevrelerin Anadolu hareketini desteklediğine", "İstanbul Hükûmetinin, halkın bütününü temsil etmediğine", "Anlaşma Devletlerinin, Millî Mücadele taraftarlarını yakından izlediğine", "Millî Mücadele taraftarlarının İstanbul Hükûmetini tanımadığına"]
        }
    }, {
        question_string: "Fransız ordusunun Anadolu topraklarından çekilirken bıraktığı silah ve teçhizatın,\nI. Eskişehir–Kütahya,\nII. Sakarya,\nIII. Başkomutan\nsavaşlarının hangilerinde, Türk kuvvetleri tarafından kullanıldığı söylenebilir?",
        choices: {
            correct: "Yalnız III",
            wrong: ["Yalnız I", "Yalnız II", "I ve II", "II ve III"]
        }
    }, {
        question_string: "Bir tarih araştırmacısı, 1. Dönem TBMM için “Milletin ta kendisidir.” demiştir.\nAraştırmacının bu nitelemeyi aşağıdakilerden hangisine dayandırdığı savunulabilir?",
        choices: {
            correct: "Farklı görüşteki üyelerden ve gruplardan oluşmasına",
            wrong: ["Olağanüstü şartlarda kurulmasına", "Meclis Hükûmeti sistemini benimsemesine", "Seçimlerin iki yılda bir yapılmasına", "İstanbul’un işgal altında olmasına"]
        }
    }, {
        question_string: "Atatürk Dönemi’nde yapılan bazı yenilikler ve düzenlemeler, yurt dışındaki örnekleri araştırılıp uzman görüşleri alındıktan sonra Türkiye’nin koşullarına uyarlanarak uygulamaya konulmuştur.\nAşağıdakilerden hangisi bu duruma bir örnek olarak gösterilebilir?",
        choices: {
            correct: "Medeni Kanun’un kabul edilmesi",
            wrong: ["23 Nisan’ın çocuk bayramı olarak kutlanması", "Tekke ve zaviyelerin kapatılması", "Halifeliğin kaldırılması", "Tekâlif-i Milliye Emirlerinin yayımlanması"]
        }
    }, {
        question_string: "1933 yılında Yataklı Vagonlar Şirketinin Türkiye temsilcisi Jannoui, Türk memurlardan birinin telefonda Türkçe konuşmasından dolayı kızıp Türkçeye hakaret ederek memuru işten çıkarmıştır. Bu olayın duyulması üzerine çoğunluğunu üniversite öğrencilerinin oluşturduğu bir grup tarafından “Bu memlekette sadece Türkçe vardır.” diyerek protesto gösterisi düzenlenmiştir. Bu gelişme tarihe, Vagon-Li Olayı olarak geçmiştir.\nBu gelişmeler dikkate alındığında aşağıdakilerden hangisine ulaşılabilir?",
        choices: {
            correct: "Toplumda dil bilincinin geliştiğine ",
            wrong: ["Ekonomide yabancı şirketlerin egemen olduğuna", "Toplumun yeni Türk alfabesini benimsediğine", "Okullarda yabancı dilde eğitimin yasaklandığına", "Toplumda yabancılara karşı bir tutum olduğuna"]
        }
    }, {
        question_string: "Atatürk, “Hiçbir millet, milletimizden daha fazla yabancı unsurların inanç ve geleneklerine saygı göstermemiştir... Fatih, İstanbul’da bulduğu dinî ve millî teşkilatın olduğu gibi kalmasına müsade etti... İstanbul’un fethinden beri Müslüman olmayanlara sağlanan büyük ayrıcalıklar, milletimizin din ve siyasete göre dünyanın en hoşgörülü ve cömert bir milleti olduğunu ispatlayan en açık kanıttır.” demiştir.\nAtatürk’ün bu sözlerinin, aşağıdaki ilkelerden hangisi hakkındaki görüşlerini içerdiği savunulabilir?",
        choices: {
            correct: "Laiklik",
            wrong: ["Milliyetçilik", "Cumhuriyetçilik", "Halkçılık", "Devletçilik"]
        }
    }, {
        question_string: "Birinci Dünya Savaşı’ndan mağlup çıkan Bulgaristan; ağır şartlar içeren Neully Barış Antlaşması’nı imzalamak zorunda kalmış, bu durum Bulgaristan’da hoşnutsuzluk yaratmış, bundan sonra Bulgaristan kaybettiği yerleri geri alma politikası izlemiştir.\nBulgaristan bu nedenle Türkiye’nin içinde yer aldığı aşağıdaki gelişmelerin hangisinden rahatsız olmuştur?",
        choices: {
            correct: "Balkan Antantı’nın oluşumunda Türkiye’nin aktif rol oynamasından",
            wrong: ["Sadabad Paktı’nın oluşumundan", "İngiltere ile Musul sorununun çözümünden", "Fransa ile Suriye sınırı sorununun çözümünden", "Türkiye’nin Milletler Cemiyetine üye olmasından"]
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