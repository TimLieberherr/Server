
// Struktur des heterogenen assoziativen Arrays als Datensatz fÃ¼r eine studierende Person
interface Studi {
    name: string;
    firstname: string;
    studyPath: string;          //Studiengang
    matrikel: number;
    age: number;
    gender: boolean;
}

// Struktur des homogenen assoziativen Arrays, bei dem ein Datensatz der Matrikelnummer zugeordnet ist
interface Studis { // homogenes assoziatives Array
    [matrikel: string]: Studi;
}

// Simples Array zum Speichern der Studi-Datensätze (nur zur Demonstration)
// export let studiSimpleArray: Studi[] = []; -> brauche ich nichhr

//ogenes assoziatives Array zur Speicherung einer Person unter der Matrikelnummer
let studiHomoAssoc: Studis = {};


interface AssocStringString {
    [key: string]: string;
}




