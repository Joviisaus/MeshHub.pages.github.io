---
title: "The Future of Construction Technology"
description: "Explore ScrewFast's pioneering role in revolutionizing construction through advanced technology and innovative solutions."
cardImage: "@/images/insights/insight-1.avif"
cardImageAlt: "Top view mechanical tools arrangement"
---
## 线性规划

## 无约束优化

### 单目标优化
### 多目标优化

#### 共轭梯度法

##### 共轭定义

设 A 是 n 阶对称矩阵，p和q是n元列向量，如果 $p^T A q = 0$ ,那么称向量 $p$ 和 $q$  关于A矩阵共轭

> 如果 $A=E_n$ ,则$p$ 和 $q$ 正交，共轭可以看作正交的推广
> 
> 若有$m$ 个 $n$ 元向量，$p_1,p_2,... , p_m$ 有
> $$
 p_i^TAp_j = 0(i\neq j,i,j = 1,2,...,m)
 $$
 则称这个向量组为$A$的共轭方向组

##### 定理
1. 设$A$为$n$阶正定矩阵，一组$n$ 元非零向量 $p_1,p_2,...,p_m$ 是矩阵$A$ 的共轭方向组，那么此向量组线性无关
2. 设$A$ 为$n$ 阶正定矩阵，一组$n$元非零向量$p_1,p_2,...,p_n$ 是矩阵$A$的共轭方向组，若向量$q$与$p_1,p_2,...,p_n$关于$A$共轭，那么$q=0$
3. 设$A$ 为$n$ 阶正定矩阵，一组$n$元非零向量$p_1,p_2,...,p_n$ 是矩阵$A$的共轭方向组,对于二次函数$f(x) = a+b^Tx+\frac{1}{2}x^TA x$,由任意初始点$x_0$出发，进行精确一维搜索，得到$x^{i+1} = x^i+\alpha_id^i，i=0,1,2,...,k$,那么$$(\nabla f(x^{k+1}))^Td^i = 0,i=0,1,2,...,k$$
4. 设$A$ 为$n$ 阶正定矩阵, $d^0,d^1,...,d^{n-1} \in R^n$ 是矩阵 $A$ 的共轭方向组，对于问题 $\min f(x) = a+b^Tx+\frac{1}{2}x^TAx$,如果从初始点$x^0$出发，依次沿方向$d_0,d_1,...,d_{n-1}$ 进行精确一维搜索，那么最多经过$n$次迭代，即可得到$f(x)$的极小值点

##### Fletcher-Reeves 公式
在共轭方向法的基础上，新的一步利用好前一步的数据，确定一个步长，更新下降方向，使得**非二次函数也能进行共轭方向法**


#### 直接搜索法

多变量函数极值，不计算导数的优化算法
- 方法简单，适用范围广
- 收敛速度比较慢
##### 坐标轮换法
沿着 $n$ 个坐标轴的方向轮流搜索，在每一次的搜索中，只对 $n$ 元函数的一个变量沿着其坐标轴的方向进行以为搜索，另外 $n-1$ 个变量保持不变，将 $n$ 维优化问题转为单变量问题。
##### Powell 方向加速法
没有共轭梯度向量时数值模拟出一个
- 基本搜索
- 加速搜索
- 调整搜索方向
##### 定理
- 对于正定二次函数 $f(x) = a+b^Tx+\frac{1}{2}x^TAx,d^0,d^1,...,d^{k-1} \in R^n(k \textless n)$ 是矩阵$A$ 的共轭方向组，如果分别从初始点 $x^0$ 和 $x^1$ 出发，依次沿方向 $d^0,d^1,...,d^{k-1}$ 进行一维搜索，并设最后得到的点是 $x^a$ 和 $x^b$ ，如果 $x^a \neq x^b$ 那么 $x^a-x^b$ 与 $d_0,d_1,...,d_{k-1}$ 关于 $A$ 是共轭的，即 $$(x^a-x^b)^T Ad^j=0,j=0,1,2,...,k-1$$
##### Hooke-Jeeves 方法
两类移动
- **探测搜索**：在初始点周围探测，寻找有利的下降方向
- **模式搜索**：沿着有利的方向加速，获得新的初始点

## 约束最优化
基本形式$$ 
\begin{array}{ll}
\min_{x\in R^n} f(x) \\ \\
s.t. h_i(x) = 0 (i=1,2,...,l) \\
h_i(x\leq 0) (i=l+1,l+2,...,m) 
\end{array}$$
其中 $f,h_i,i=1,2,...,m$ 均为 $R^n$ 或其子集上的连续可微实值函数

- 满足所有约束条件构成的点叫做**可行域**，记为 $\Omega$
- 可行域中的点，即 $x \in \Omega$ 为**可行点**
- **可行方向**: 非零向量 $d$ 称为点 $x^* \in \Omega$ 处的一个可行方向，如果存在一个数 $t^* \gt 0$ ，使得对于任意的 $t \in (0,t^*),都有x^* + td \in \Omega$，非零向量 $d$ 称为点 $x^* \in \Omega$ 的一个可行下降方向，如果存在一个数 $t^* \gt 0$,使得对任意的 $t \in (0,t^*)$ 都有 $f(x^*+td) \lt f(x^*)$ 且 $x^*+td \in \Omega$

#### 非线性规划的一阶最优性条件
$$
\begin{array}{ll}
\min f(x) \\

	s.t.h_i(x)= 0 (i=1,2,...,l)
	\end{array}
	$$
##### 必要条件：
存在 $\mu^* = (\mu_1^*,...,\mu_l^*)^T \in R^l$ 使得$$\nabla_xL(x^*,\mu^*)=\nabla f(x^*)+\sum_{i=1}^l\mu_i^*\nabla h_i(x^*) = 0$$
其中 $L(x,\mu) := f(x)+\sum_{i=1}^l\mu_ih_i(x)$ 

##### Karush-Kuhn-Tucker 条件
存在 $\lambda^* \in R^m$ 使得$$\nabla_xL(x^*,\lambda^*)=\nabla f(x^*)+\sum_{i=1}^l\lambda_i^*\nabla h_i(x^*) = 0$$
$$\begin{array}{ll}
h_i(x^*) = 0,i = 1,2,...,l\\
h_i(x^*) \le = 0,i= l+1,l+2,...,m\\
\lambda_i^*h_i(x^*)= 0,i = l+1,l+2,...,m\\
\lambda_i^* \ge 0,i=l+1,l+2,...,m
\end{array}$$
其中 $L(x,\mu) := f(x)+\sum_{i=1}^l\lambda_ih_i(x)$ 

#### 凸规划问题
目标函数是凸函数，约束集合是凸集合
$$
\begin{array}{ll}
\min f(x) \\

	s.t.h_i(x)= 0 (i=1,2,...,l)
	\end{array}
	$$
**凸函数的充要条件**
对于凸集$\Omega$ 上的可微函数，对于所有的$x,y \in \Omega$都有$$ f(u) \ge f(x) + (\nabla f(x))^T(y-x) $$
**定理：凸规划问题的 KKT 点必为该问题的最优解**

**定理：设 $x^*$ 为最优解，且满足 Slater 条件： 
	$\exists \hat{x} \in R^n$ 满足$h_i(\hat{x}) = 0(i=1,...,l)$;$h_i(\hat{x}) < 0(i=l+1,l+2,...,m)$
$\hat{x} \in \Omega$ 称为绝对可行点，$x^*$为 KKT 点

#### 二次规划
一般形式$$ \begin{array}{ll}
\min q(x) = \frac{1}{2} x^TGx + c^Tx\\
s.t. \begin{array}{ll}
a_i^T x = b_i(i=1,2,...,l)\\
a_i^T x \le b_i(i=l+1,l+2,...,p)
\end{array}
\end{array}$$
