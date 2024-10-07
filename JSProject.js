/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const myNFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, hairColor, eyeColor, shirtType, accesory) {

    const NFT = {
        "name": name,
        "hairColor": hairColor,
        "eyeColor": eyeColor,
        "shirtType": shirtType,
        "accesory": accesory
    }

    myNFTs.push(NFT);
    console.log("\nSuccessfully minted " + name + "!");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < myNFTs.length; i++){
        console.log("\nID: " + [i + 1]);
        console.log("\tName: " + myNFTs[i].name);
        console.log("\tHair Color: " + myNFTs[i].hairColor);
        console.log("\tEye Color: " + myNFTs[i].eyeColor);
        console.log("\tShirt Type: " + myNFTs[i].shirtType);
        console.log("\tAccessory: " + myNFTs[i].accesory);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nYou currently have " + myNFTs.length + " NFTs.");
}

// call your functions below this line
mintNFT("Cha", "Brown", "Brown", "Sweater", "Pearl Necklace");
mintNFT("Leen", "Brown", "Brown", "Puffer Jacket", "Silver Ring");
mintNFT("Cody", "Brown", "Brown", "Button Up", "Smartwatch");
listNFTs();
getTotalSupply();
