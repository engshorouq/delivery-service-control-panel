BEGIN;

    INSERT INTO users
        (user_name, password, role)
    VALUES('admin', '$2a$05$WRLE5TPY4ppszWklRiX0m.kjyX8uMtZ76O9lt8y8zXilM.vl/5hjS', 'admin');
    -- for TUser information 1 captain , 2 customer
    INSERT INTO TUser
        (s_name, s_mobile_number, b_status, s_address, s_image)
    VALUES
     ('دينا معين حجي','+9705588888888',true,'غزة','test.png'),
     ('جملات عبدالرحمن شملخ','+97078888877888',true,'شيخ رضوان','test.png'),
     ('كنعان جمال حسونة','+9747778888',true,'غزة','test.png'),
     ('أحمد محمد العلمي','+974745778888',true,'خانيونس','test.png'),
     ('خضر احمد مرتجى','+97474577778888',true,'نصر','test.png');
    
    INSERT INTO orders
        ( product_name, i_status,o_price)
    VALUES
        ( 'زبدة', 2,300),
        ( 'دجاج', 2,300),
        ('كنتاكي', 2,300),
        ('كاتشب', 2,300),
        ('مخللات',  2,300),
        ('حلويات', 2,300);


    INSERT INTO TUser_order
        (tuser_id, order_id)
    VALUES
     (1,1), 
     (2,2), 
     (3,3), 
     (4,4),   
     (5,5), 
     (1,6);
    COMMIT;