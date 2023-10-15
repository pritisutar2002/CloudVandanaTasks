/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package shufflearray;

import java.util.Random;

public class ShuffleArray {

    
    public static void main(String[] args) {
    int[] array = {1, 2, 3, 4, 5, 6, 7};
        shuffleArray(array);
        System.out.print( " shuffled array are : ");
        // Print the shuffled array
        for (int num : array) {
            
            System.out.print(num + " ");
        }
    }
     public static void shuffleArray(int[] array) {
        int n = array.length;
        Random random = new Random();

        for (int i = n - 1; i > 0; i--) {
            int j = random.nextInt(i + 1);
            // Swap array[i] and array[j]
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    
}
