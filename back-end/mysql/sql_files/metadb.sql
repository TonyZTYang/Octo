create table baojing_record
(
	Id int auto_increment comment 'ID'
		primary key,
	ProjectName varchar(255) null comment '项目名称',
	Content varchar(1024) null comment '报警内容',
	BJTime datetime null comment '报警时间'
);

create table laws
(
	Id int auto_increment comment 'ID'
		primary key,
	FileName varchar(255) not null comment '文件名称',
	FileSize double not null comment '文件大小',
	FileType varchar(255) default '' not null comment '文件类型',
	uploadtime timestamp default '0000-00-00 00:00:00' null on update CURRENT_TIMESTAMP comment '上传时间',
	File mediumblob null comment '文件实体'
);

create table option_log
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
	Id int auto_increment comment '项目ID'
		primary key,
	StartDate date default '0000-00-00' not null comment '开始日期',
	EndDate date default '0000-00-00' not null comment '结束日期',
	HaveTestCount varchar(255) default '-' null comment '已检测点数',
	NoTestCount varchar(255) default '-' null comment '未检测点数',
	LeakCount varchar(255) default '-' null comment '泄露点数',
	DOR varchar(255) null,
	TotalCount varchar(255) default '-' null comment '总计',
	IsFinished varchar(255) default '' not null comment '是否完成',
	DBName varchar(255) default '' not null comment '数据库名称',
	ProjectName varchar(255) default '' not null comment '项目名称',
	TestType varchar(255) default '' null comment '检测类型',
	BaoJingCount int null comment '报警次数记录'
);

create table user_log
(
	Id int auto_increment comment 'ID'
		primary key,
	UserName varchar(255) default '' not null comment '用户名',
	LoginTime timestamp default '0000-00-00 00:00:00' not null comment '登录时间',
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
	Sex varchar(255) default '' not null comment '性别',
	IdentityID varchar(255) default '' null comment '身份证号',
	Telephone varchar(255) null comment '电话',
	Cellphone varchar(11) default '' not null comment '移动电话',
	Birthday date null comment '生日',
	RoleID int default 0 not null comment '角色ID',
	OldPsd varchar(255) default '' null comment '加密前密码',
	constraint fk_role
		foreign key (RoleID) references user_role (Id)
			on update cascade
);

