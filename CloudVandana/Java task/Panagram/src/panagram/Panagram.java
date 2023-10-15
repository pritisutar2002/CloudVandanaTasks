/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package panagram;

import java.util.Scanner;

/**
 *
 * @author Lenovo
 */
public class Panagram {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner str1 = new Scanner(System.in);  // Create a Scanner object
        System.out.println("Enter The string");
         String str2 = str1.nextLine();
//       System.out.println( checkPanagram(str2.toLowerCase()));
             if(isPanagram(str2.toLowerCase())){
              System.out.println("The sentence is a pangram!");
        } else {
            System.out.println("The sentence is not a pangram.");
        }
        
     

    }

    private static boolean isPanagram(String str2) {
        if(str2.length()<26){
            return false;
        }
        else{
            char ch;
            for(ch='a';ch<='z';ch++){
                if(str2.indexOf(ch)<0){
                   return false; 
                }
                 
            }
           
        }
        return true;
    }
    
}
