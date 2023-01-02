//Retourner un tableau dont les objets ont été triés par ordre décroissant en fonction de la moyenne de chaque élèves.

console.log(
    sortedStudents([
        {name: "tom", grades:[1, 3, 5, 9, 2, 7]},
        {name: "jack", grades: [20, 4, 18, 10, 14, 12]},
        {name: "ana", grades: [11, 14, 3, 14, 12, 14]},
        {name: "sara", grades: [10, 12, 14, 15, 14, 19]}
    ])
);

function sortedStudents(arr){
    console.log(arr[0].grades.reduce(
        (accumulateur, valeurCourante) => accumulateur + valeurCourante) / arr[0].grades.length
        );

    return arr.sort((a,b) => {
        return (
            b.grades.reduce((accumulateur, valeurCourante) => accumulateur + valeurCourante) / b.grades.length -
            a.grades.reduce((accumulateur, valeurCourante) => accumulateur + valeurCourante) / a.grades.length
        )
    });
};

/* 

Algorithme d'insertion:

Fonctionnement de la méthode sort();

a - b : ordre croissant

arr[3,2,1]

3 - 2 = 1 [2,3,1]
3 - 1 = 2 [2,1,3]
2 - 1 = 1 [1,2,3]

*/

/*

b - a : ordre décroissant

arr[1,2,3]

2 - 1 = 1 [2,1,3]
3 - 1 = 2 [2,3,1]
3 - 2 = 1 [3,2,1]

*/