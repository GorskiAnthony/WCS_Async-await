/**
 * Synchrone
 */
console.log("HTML");
console.log("CSS");
console.log("JS");

/**
 * Asynchrone
 */
console.log("HTML");
setTimeout(() => {
	console.log("CSS");
}, 5000);
console.log("JS");

/**
 * fonction anonyme
 *
 * function() {}
 * () => {}
 */

/**
 * Callback
 */

// Fonction sayHello qui prend en paramettre une string
const sayHello = (name) => {
	return `Salut ${name}, tu vas bien ?`;
};

function introduction(firstname, lastname, callback) {
	const fullname = `${firstname} ${lastname}`;
	// j'appel ma fonction de callback
	console.log(callback(fullname));
}

introduction("Anthony", "LeBG", sayHello);

/**
 * Création de notre promesse
 */

const dateTournoi = new Promise(function (resolve, reject) {
	// Pour le bien du test, j'ajoute un boolean pour passe de resolve à reject
	const tournoi = true;
	if (tournoi) {
		const dateDetails = {
			name: "Tournoi d'échecs",
			location: "Marseille",
			table: 1,
		};
		resolve(dateDetails);
	} else {
		// const error = {
		// 	message: "une erreur est survenue",
		// };
		reject(new Error("Tournoi HS"));
		// new Error(message, options)
	}
});

/**
 * Création d'une promesse pour les chaîners (dateTournoi + callMyMom)
 */

const callMyMom = function (dateDetails) {
	return new Promise(function (resolve) {
		const message = `Vite maman ! Amène-moi à ${dateDetails.location}, j'ai un tournoi !`;
		resolve(message);
	});
};
/**
 * 
 * dateTournoi
	.then(callMyMom) ===  .then((res) => callMyMom(res))
 	.then((res) => console.log(res))
 	.catch((e) => console.error(e.message)); 
 */

/**
 * Utilisation de la méthode classic
 */
dateTournoi
	.then(callMyMom)
	.then((res) => console.log(res))
	.catch((e) => console.error(e.message));

/**
 * Utilisation de la méthode Async/ Await
 */
async function myDate() {
	try {
		let dateDetails = await dateTournoi;
		let message = await callMyMom(dateDetails);
		console.log(message);
	} catch (error) {
		console.log(error.message);
	}
}

(async () => {
	await myDate();
})();

/*

// async function chargementPersonnageJeuVideo() {   					<---- exemple : on veut charger un personnage de Jeux-Vidéo
// 	try { 																<---- on essaie (try = essayer) de faire tout ce qui est entre les accolades qui suivent
// 		let modele3D = await chargeMonModel3D; 							<---- on attend le chargement du modèle 3D qu'on stocke dans la variable "modele3D"
//      let texture = await chargeMaTexture; 							<---- on attend le chargement de la texture qu'on stocke dans la variable "texture"
// 		let modeleTexturer = await textureMonModele(texture, modele3D); <---- on attend la fin de l'éxécution de la fonction "textureMonModele"
// 																			  pour mettre notre texture sur notre modele 3D
// 																			  et on stocke ça dans la variable "modeleTexturer"
// 		console.log(modeleTexturer); 									<---- on affiche notre modèle texturé
// 	} catch (error) { 													<---- en cas d'erreur dans le "try" on exécute ça
// 		console.log(error.message);
// 	}
// }

*/
