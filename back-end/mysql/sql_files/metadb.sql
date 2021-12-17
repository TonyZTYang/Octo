create table operation_log
(
	Id int auto_increment comment 'ID'
		primary key,
	ProjectName varchar(255) default '' not null comment '项目名称',
	TableName varchar(255) default '' not null comment '数据表',
	OptionInfo varchar(255) default '' not null comment '操作',
	UserName varchar(255) default '' not null comment '用户名',
	UserRole varchar(255) default '' not null comment '用户身份',
	OptionTime timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP comment '操作时间'
);

create table projects
(
	id int auto_increment comment '项目ID'
		primary key,
	start_date date default (current_date) comment '开始日期',
	dead_line_date date comment '合同截止日期',
	end_date date comment '结束日期',
	total_count int default 0 comment '项目总点数',
	detected_count int default 0 comment '已检测点数',
	leakage_count int default 0 comment '泄露点数',
	is_finished bool default false comment '是否完成',
	db_name varchar(255) default '' not null comment '数据库名称',
	project_name varchar(255) default '' not null comment '项目名称',
	detection_type varchar(255) default '' null comment '检测类型'
);

create table user_log
(
	Id int auto_increment comment 'ID'
		primary key,
	UserName varchar(255) default '' not null comment '用户名',
	LoginTime timestamp not null comment '登录时间',
	Role varchar(255) default '' not null comment '用户角色'
);

create table user_project
(
	Id int auto_increment comment 'ID'
		primary key,
	UserID int default 0 not null comment '用户ID',
	ProjectID int default 0 not null comment '项目ID'
)
comment '用户对应项目表';

create table user_role
(
	Id int auto_increment comment 'ID'
		primary key,
	Name varchar(255) default '' not null comment '用户角色',
	SelAuth varchar(255) null comment '查询权限',
	AlterAuth varchar(255) null comment '修改权限',
	AddAuth varchar(255) null comment '添加权限',
	DelAuth varchar(255) null comment '删除权限'
);

create table user
(
	Id int auto_increment comment 'ID'
		primary key,
	UserName varchar(255) default '' not null comment '用户名',
	Password varchar(255) default '' not null comment '加密后密码',
	Name varchar(255) default '' not null comment '姓名',
	RoleID int default 0 not null comment '角色ID'
);

