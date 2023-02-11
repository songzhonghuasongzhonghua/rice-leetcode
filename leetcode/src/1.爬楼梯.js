/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
   每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
   示例 1：
    输入：n = 2
    输出：2
    解释：有两种方法可以爬到楼顶。
    1. 1 阶 + 1 阶
    2. 2 阶
    示例 2：
输入：n = 3
    输出：3
    解释：有三种方法可以爬到楼顶。
    1. 1 阶 + 1 阶 + 1 阶
    2. 1 阶 + 2 阶
    3. 2 阶 + 1 阶
 * @param {number} n
 * @return {number}
 */
//时间复杂度约为O(n²) 不推荐
var climbStairs = function (n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  return climbStairs(n - 1) + climbStairs(n - 2)
}

//用了一个哈希表将已经算过的存储,需要的时候直接用,时间复杂度O(n)
const storeMap = new Map()
var climbStairsOptimize = function (n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  if (storeMap.has(n)) {
    return storeMap.get(n)
  } else {
    const res = climbStairs(n - 1) + climbStairs(n - 2)
    storeMap.set(n, res)
    return res
  }
}
climbStairsOptimize(5)
