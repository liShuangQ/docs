---
title: 常用CURD操作
category:
  - 操作  
  - 代码片段
tag:
  - spring  
  - 框架  
  - jdbc  
  - CURD
---

大致使用以下三个方法:1.execute方法，用于直接执行SQL语句2.update方法，用户新增修改删除操作3.query方法，用于查询方法

## 代码演示
```java
String sql = "CREATE TABLE `user` (\n" +
"  `id` int(11) NOT NULL AUTO_INCREMENT,\n" +
"  `user_name` varchar(255) DEFAULT NULL,\n" +
"  `pass_word` varchar(255) DEFAULT NULL,\n" +
"  PRIMARY KEY (`id`)\n" +
") ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;\n" +
"\n";
jdbcTemplate.execute(sql);
return "创建User表成功";

---

String sql = "INSERT INTO USER (USER_NAME,PASS_WORD) VALUES ('dalaoyang','123')";
int rows= jdbcTemplate.update(sql);
return "执行成功，影响"+rows+"行";

---

int rows= jdbcTemplate.update("INSERT INTO USER (USER_NAME,PASS_WORD) VALUES (?,?)",userName,passWord);
return "执行成功，影响"+rows+"行";

---

int rows= jdbcTemplate.update("UPDATE USER SET PASS_WORD = ? WHERE ID = ?",passWord,id);
return "执行成功，影响"+rows+"行";

---

int rows= jdbcTemplate.update("DELETE FROM  USER  WHERE ID = ?",id);
return "执行成功，影响"+rows+"行";

---

String sql =
"INSERT INTO USER (USER_NAME,PASS_WORD) VALUES (?,?)" ;
List<Object[]> paramList = new ArrayList<>();
for (int i = 0; i < 10; i++) {
    String[] arr = new String[2];
    arr[0] = "zhangsan"+i;
    arr[1] = "password"+i;
    paramList.add(arr);
}
jdbcTemplate.batchUpdate(sql,paramList);
return "执行成功";

---

List<User> list= jdbcTemplate.query(sql,new User(),new Object[]{userName});
return list;

---


String sql = "SELECT * FROM USER WHERE ID = ?";
Map map= jdbcTemplate.queryForMap(sql,id);
return map;

---

String sql = "SELECT * FROM USER WHERE ID = ?";
User user= jdbcTemplate.queryForObject(sql,new User(),new Object[]{id});
return user;

```

## 测试方法介绍
- 使用execute方法创建User表
- 使用update方法，传入参数sql语句，直接执行插入操作
- 使用update方法，传入sql语句和对应字段值，进行插入操作
- 使用update方法，传入sql语句和对应字段值，进行修改操作
- 使用update方法，传入sql语句和对应字段值，进行删除操作
- 使用batchUpdate方法，传入sql和参数集合，进行批量更新
- 使用query方法，传入sql，实体对象，查询参数，这里就用到了实体类重写的mapRow方法
- 使用queryForMap方法，传入sql和参数，返回Map
- 使用queryForObject方法，传入sql，实体对象，查询参数，返回User实体类，这里也用到了实体类重写的mapRow方法
