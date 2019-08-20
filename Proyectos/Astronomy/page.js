		
		function charge(){
		// whether the slideshow is paused or not
		var paused = false;
		var howtotext="Click on the big image to see the description without image sliding. Clkick on the BACK and FWD buttons to go through the images. Click on the image to see it in big size with the corresponding description";
		$("#howto").html(howtotext);
		var textimage1="A galaxy is a huge group of stars, dust, gas, and other celestial bodies bound together by gravitational forces. There are spiral, elliptical, and irregularly shaped galaxies. Galaxies contain anywhere from 100,000 to 3,000,000,000,000   stars. There are three major types of galaxies: spiral (with arms), elliptical (no arm), and irregular (without rotational symmetry). Galaxies radiate a continuous spectrum of energy. Some radiate radio waves,  X rays, and infrared, and ultraviolet (UV) radiation. The Earth, Sun and the rest of our solar system are a tiny part of the Milky Way Galaxy, a spiral galaxy. The Milky way Galaxy is just one galaxy in a group of galaxies called the Local Group. Within the Local Group, the Milky Way Galaxy is moving about 300 km/sec (towards the constellation Virgo).      The galaxy that is nearest to our galaxy is the Sagittarius Dwarf galaxy, which is about 24 kiloparsecs or 80,000 light years from us. The Large                 Magellanic Cloud is another close galaxy; it is about 50 kiloparsecs from us. ";
		
		var textimage2="The Big Bang theory is the prevailing cosmological model for the universe from the earliest known periods through its subsequent large-scale evolution. The model accounts for the fact that the universe expanded from a very high density and high temperature state, and offers a comprehensive explanation for a broad range of phenomena, including the abundance of light elements, the cosmic microwave background, large scale structure and Hubble's Law. If the known laws of physics are extrapolated beyond where they have been verified, there is a singularity. Some estimates place this moment at approximately 13.8 billion years ago, which is thus considered the age of the universe.After the initial expansion, the universe cooled sufficiently to allow the formation of subatomic particles, and later simple atoms. Giant clouds of these primordial elements later coalesced through gravity to form stars and galaxies."
		
		var textimage3="A comet is an icy small Solar System body that, when passing close to the Sun, heats up and begins to outgas, displaying a visible atmosphere or coma, and sometimes also a tail. These phenomena are due to the effects of solar radiation and the solar wind upon the nucleus of the comet. Comet nuclei range from a few hundred metres to tens of kilometres across and are composed of loose collections of ice, dust, and small rocky particles. The coma and tail are much larger and, if sufficiently bright, may be seen from the Earth without the aid of a  telescope. Comets have been observed and recorded since ancient times by many cultures."
		
		var textimage4="A black hole is a region of spacetime exhibiting such strong gravitational effects that nothing—including particles and electromagnetic radiation such as light—can escape from inside it. The theory of general relativity predicts that a sufficiently compact mass can deform spacetime to form a black hole. The boundary of the region from which no escape is possible is called the event horizon. Although crossing the event horizon has enormous effect on the fate of the object crossing it,it appears to have no locally detectable features.In many ways a black hole acts like an ideal black body, as it reflects no light. Moreover, quantum field theory in curved spacetime predicts that event horizons emit Hawking radiation, with the same spectrum as a black body of a temperature inversely proportional to its mass. This temperature is on the order of billionths of a kelvin for black holes of stellar mass, making it essentially impossible to observe.";
		
		var textimage5="The Solar System is the gravitationally bound system comprising the Sun and the objects that orbit it, either directly or indirectly.Of those objects that orbit the Sun directly, the largest eight are the planets,with the remainder being significantly smaller objects, such as dwarf planets and small Solar System bodies. Of the objects that orbit the Sun indirectly, the moons, two are larger than the smallest planet, Mercury."
		
		var textimage6="A nebula is a cloud of gas and dust in space. Some nebulae (more than one nebula) are regions where new stars are being formed, while others are the remains of dead or dying stars. Nebulae come in many different shapes and sizes. There are four main types of nebulae: planetary nebulae, reflection nebulae, emission nebulae, and absorption nebulae. The word nebula comes from the Latin word for cloud. "
		var textimage7="A meteoroid is a small rocky or metallic body travelling through outer space. Meteoroids are significantly smaller than asteroids, and range in size from small grains to 1 meter-wide objects. Objects smaller than this are classified as micrometeoroids or space dust.Most are fragments from comets or asteroids, whereas others are collision impact debris ejected from bodies such as the Moon or Mars"
		var textimage8="A telescope is an instrument that aids in the observation of remote objects by collecting electromagnetic radiation (such as visible light). The first known practical telescopes were invented in the Netherlands at the beginning of the 17th century, using glass lenses. They found use in terrestrial applications and astronomy."
		var textimage9="Edwin Powell Hubble (November 20, 1889 – September 28, 1953)was an American astronomer who played a crucial role in establishing the field of extragalactic astronomy and is generally regarded as one of the most important observational cosmologists of the 20th century. Hubble is known for showing that the recessional velocity of a galaxy increases with its distance from the earth, implying the universe is expanding,known as Hubbles law although this relation had been discovered previously by Georges Lemaître, who published his work in a less visible journal.Edwin Hubble is also known for providing substantial evidence that many objects then classified as nebulae were actually galaxies beyond the Milky Way."
		var textimage10="Albert Einstein 14 March 1879 – 18 April 1955) was a German-born theoretical physicist. He developed the general theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics).Einstein's work is also known for its influence on the philosophy of science. Einstein is best known in popular culture for his mass–energy equivalence formula E = mc2 (which has been dubbed -the world's most famous equation-).He received the 1921 Nobel Prize in Physics for his services to theoretical physics, in particular his discovery of the law of the photoelectric effect, a pivotal step in the evolution of quantum theory."
		var textimage11="Stephen William Hawking  (born 8 January 1942) is an English theoretical physicist, cosmologist, author and Director of Research at the Centre for Theoretical Cosmology within the University of Cambridge.His scientific works include a collaboration with Roger Penrose on gravitational singularity theorems in the framework of general relativity, and the theoretical prediction that black holes emit radiation, often called Hawking radiation. Hawking was the first to set forth a theory of cosmology explained by a union of the general theory of relativity and quantum mechanics. He is a vigorous supporter of the many-worlds interpretation of quantum mechanic"
		var textimage12="Galileo Galilei (15 February 1564[3] – 8 January 1642), was an Italian astronomer, physicist, engineer, philosopher, and mathematician who played a major role in the scientific revolution during the Renaissance. Galileo has been called the -father of observational astronomy-, the -father of modern physics-,and the -father of science-.His contributions to observational astronomy include the telescopic confirmation of the phases of Venus, the discovery of the four largest satellites of Jupiter (named the Galilean moons in his honour), and the observation and analysis of sunspots. Galileo also worked in applied science and technology, inventing an improved military compass and other instruments."
		// when you click on a thumbnail
		
		// it sets the src of the big image
		// to be the same as the image
		// you clicked on
		$(".crop-img").click(function(){
			$("#bigImage").attr('src', 
				$(this).attr('src'));
			$("#hinfo").html($(this).attr('alt'));
			if ($(this).attr('id')=="image1")
			$("#imageref").html(textimage1);
			if ($(this).attr('id')=="image2")
			$("#imageref").html(textimage2);
			if ($(this).attr('id')=="image3")
			$("#imageref").html(textimage3);
			if ($(this).attr('id')=="image4")
			$("#imageref").html(textimage4);
			if ($(this).attr('id')=="image5")
			$("#imageref").html(textimage5);
			if ($(this).attr('id')=="image6")
			$("#imageref").html(textimage6);
			if ($(this).attr('id')=="image7")
			$("#imageref").html(textimage7);
			if ($(this).attr('id')=="image8")
			$("#imageref").html(textimage8);
			if ($(this).attr('id')=="image9")
			$("#imageref").html(textimage9);
			if ($(this).attr('id')=="image10")
			$("#imageref").html(textimage10);
			if ($(this).attr('id')=="image11")
			$("#imageref").html(textimage11);
			if ($(this).attr('id')=="image12")
			$("#imageref").html(textimage12);
			
		});

		// the counter variable that keeps
		// track of which image you are showing
		var counter = 1;
		// virtually click on the current
		// image to load it into the big image
		$("#image"+counter).click();

		// when you click on the backwards
		// button select the previous image
		$("#backward").click(function (){
			// go back one in the counter
			counter = counter - 1;
			// if we are below 1 (the first
			// image) loop round to 4 (the
			// last image)
			if(counter < 1){
				counter = 12;
			}
			// virtually click on the current
			// image to load it into the big image
			$("#image"+counter).click();
		});

		// when you click on the backwards
		// button select the next image
		$("#forward").click(function (){
            $("#image"+counter).attr('style',"border:none")									  
			// go forward one in the counter
			counter = counter + 1;
			// if we are above 4 (the last
			// image) loop round to 1 (the
			// first image)
			if(counter > 12){
				counter = 1;
			}
			// virtually click on the current
			// image to load it into the big image
			$("#image"+counter).click();
		});

		// when you click the big image 
		// toggle pausing. Set paused to 
		// not paused, i.e. if it is paused
		// set it to not paused, if it is 
		// not paused set it to paused
		$("#bigImage").click(function (){
			paused = !paused;
		});

		// set interval makes it move 
		// forward every 3 second
		setInterval(function (){
			// first check if it is paused
			if(!paused){
				// virtual click the forward
				// button
				$("#forward").click();
			};
		}, 5000);

      };