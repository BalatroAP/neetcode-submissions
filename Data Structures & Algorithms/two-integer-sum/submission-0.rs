impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
      let mut answer: Vec<i32> = Vec::new();
      for idx in 0..nums.len() - 1 {
        for j in idx + 1..nums.len() {
          if nums[idx] + nums[j] == target {
            answer.push(idx as i32);
            answer.push(j as i32);
            break;
          }
        }
      }
      answer
    }
}
