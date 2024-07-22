const SectionWithInfo = () => {
	const welcomeSection = {
		backgroundImage: `url(./../../../images/about.jpg)`,

	};

	const sectionCountBack = {
		backgroundImage: `url(./../../../images/bg_2.jpg)`,

	};



	return (
		<>
			<section className="ftco-about d-md-flex">
				<div className="one-half img" style={welcomeSection}></div>
				<div className="one-half ftco-animate">
					<div className="heading-section ftco-animate ">
						<h2 className="mb-4">Ехо, <span className="flaticon-pizza">Pizza Bonna</span> ви приветства</h2>
					</div>
					<div>
						<p>Ние сме една малка, но уютна пицария, намираща се в сърцето на морската столица на България - ВАРНА. Правим пиците си пред очите на клиентите, като ги изпичаме на лента - Да, точно като от едно време. Използваме само пресни и качествени продукти от местни производители, за да предложим на нашите клиенти най-добрия вкус на пицата. Стараем се да поддържаме високо качество на ниски цени, за да бъде вкусната пица достъпна за всеки.</p>
					</div>
				</div>
			</section>
			<section className="ftco-intro">
				<div className="container-wrap">
					<div className="wrap d-md-flex">
						<div className="info">
							<div className="row no-gutters">
								<div className="col-md-4 d-flex ftco-animate">
									<div className="icon"><span className="icon-phone"></span></div>
									<div className="text">
										<h3> +359 87 858 5852 </h3>
										<p>Телефон за поръчки</p>
									</div>
								</div>
								<div className="col-md-4 d-flex ftco-animate">
									<div className="icon"><span className="icon-my_location"></span></div>
									<div className="text">
										<h3>Варна, бул. „Сливница“ 14</h3>
										<p>срещу хотел "Черно море"</p>
									</div>
								</div>
								<div className="col-md-4 d-flex ftco-animate">
									<div className="icon"><span className="icon-clock-o"></span></div>
									<div className="text">
										<h3>Отворено всеки ден</h3>
										<p>08:00 - 04:00</p>
									</div>
								</div>
							</div>
						</div>
						<div className="social d-md-flex pl-md-5 p-4 align-items-center">
							<ul className="social-icon">
								<li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
								<li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
								<li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className="ftco-counter ftco-bg-dark img" id="section-counter"

				style={sectionCountBack}

				data-stellar-background-ratio="0.5">
				<div className="overlay"></div>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-10">
							<div className="row">
								<div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
									<div className="block-18 text-center">
										<div className="text">
											<div className="icon"><span className="flaticon-pizza-1"></span></div>
											<strong className="number" data-number="100">0</strong>
											<span>Pizza Branches</span>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
									<div className="block-18 text-center">
										<div className="text">
											<div className="icon"><span className="flaticon-medal"></span></div>
											<strong className="number" data-number="85">0</strong>
											<span>Number of Awards</span>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
									<div className="block-18 text-center">
										<div className="text">
											<div className="icon"><span className="flaticon-laugh"></span></div>
											<strong className="number" data-number="10567">0</strong>
											<span>Щастливи клиенти</span>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
									<div className="block-18 text-center">
										<div className="text">
											<div className="icon"><span className="flaticon-chef"></span></div>
											<strong className="number" data-number="900">0</strong>
											<span>Персонал</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default SectionWithInfo