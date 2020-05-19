package Practice_Problems.Sliding_Window;

/**
 * SlidingWindow
 */
// public class SlidingWindow {

// static int maxSubArray(int arr[], int num) {
// // INITIAL CHECK
// if (num > arr.length) {
// return -1;
// }
// // build variables
// int maxSum = Integer.MIN_VALUE;
// int tempSum = 0;

// // loop through array and create a temp sum
// for (int i = 0; i <= arr.length - num; i++) {
// tempSum = 0;
// for (int j = 0; j < num; j++) {
// tempSum = tempSum + arr[i + j];
// }
// // check if temp sum is larger than maxSum
// maxSum = Math.max(tempSum, maxSum);
// }

// // return maxSum
// return maxSum;
// }

// public static void main(String[] args) {
// int arr[] = { 2, 6, 3, 5 };
// int num = 4;
// System.out.println(maxSubArray(arr, num));
// }

// }

public class SlidingWindow {
    static int maxSubArray(int arr[], int num) {
        int maxSum = 0;

        for (int i = 0; i < num; i++) {
            maxSum = maxSum + arr[i];
        }
        int tempSum = maxSum;

        for (int j = 0; j < arr.length - num; j++) {
            tempSum = tempSum - arr[j] + arr[num + j];
            maxSum = Math.max(tempSum, maxSum);
        }
        return maxSum;
    }

    public static void main(String[] args) {
        int arr[] = { 2, 5, 7, 4, 8, 20 };
        int num = 1;
        System.out.println(maxSubArray(arr, num));
    }
}